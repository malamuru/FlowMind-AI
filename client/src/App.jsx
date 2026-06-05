import { useRef, useState } from 'react'
import { analyzeWorkflowAPI } from './services/api'
import { extractTextFromPDF } from './utils/pdfParser'

export default function App() {
  const [documentText, setDocumentText] = useState('')
  const [fileName, setFileName] = useState(null)
  const [analysis, setAnalysis] = useState(null)
  const [isParsing, setIsParsing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fileInputRef = useRef(null)

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setError(null)
    setAnalysis(null)
    setDocumentText('')
    setFileName(null)

    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      setIsParsing(true)
      setFileName(file.name)

      try {
        const text = await extractTextFromPDF(file)

        if (!text || text.length < 10) {
          setError('Could not extract text from this PDF. Please paste the document manually.')
          setFileName(null)
        } else {
          setDocumentText(text)
        }
      } catch (err) {
        setError('Failed to read PDF. Please paste the document manually.')
        setFileName(null)
      } finally {
        setIsParsing(false)
        fileInputRef.current.value = ''
      }

      return
    }

    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      setFileName(file.name)

      const reader = new FileReader()
      reader.onload = (event) => setDocumentText(event.target.result)
      reader.onerror = () => setError('Failed to read file. Please paste text manually.')
      reader.readAsText(file)

      fileInputRef.current.value = ''
      return
    }

    setError('Unsupported file type. Please upload PDF or TXT.')
    fileInputRef.current.value = ''
  }

  const analyzeWorkflow = async () => {
    if (!documentText.trim()) {
      setError('Please paste or upload a business document.')
      return
    }

    setIsLoading(true)
    setError(null)
    setAnalysis(null)

    try {
      const data = await analyzeWorkflowAPI(documentText)
      setAnalysis(data.analysis)
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-badge">AI Workflow Automation</div>

        <h1>FlowMind AI</h1>

        <p>
          Upload business notes, meeting summaries, or process documents.
          FlowMind AI extracts action items, risks, missing information,
          automation opportunities, and recommended workflows.
        </p>
      </header>

      <main className="container">
        <section className="input-card">
          <div className="label-row">
            <label>Business Document / Meeting Notes / Process Details</label>

            <button
              className="upload-btn"
              onClick={() => fileInputRef.current.click()}
              disabled={isParsing}
            >
              {isParsing ? 'Reading...' : 'Attach PDF / TXT'}
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
          </div>

          {fileName && !isParsing && (
            <div className="file-badge">
              <span>{fileName}</span>

              <button
                onClick={() => {
                  setFileName(null)
                  setDocumentText('')
                }}
              >
                ×
              </button>
            </div>
          )}

          {isParsing && <p className="info">Extracting text from PDF...</p>}

          <textarea
            placeholder="Paste business workflow notes here. Example: meeting notes, client requirements, operations process, project update, or internal SOP..."
            value={documentText}
            onChange={(e) => {
              setDocumentText(e.target.value)
              setFileName(null)
            }}
            rows={16}
            disabled={isParsing}
          />
        </section>

        {error && <div className="error">{error}</div>}

        <button
          className="analyze-btn"
          onClick={analyzeWorkflow}
          disabled={isLoading || isParsing}
        >
          {isLoading ? 'Analyzing Workflow...' : 'Analyze Workflow'}
        </button>

        {analysis && (
          <section className="result">
            <div className="result-header">
              <div>
                <h2>Workflow Analysis Report</h2>
                <p>AI-generated operational insights from your document.</p>
              </div>
            </div>

            <pre className="ai-output">{analysis}</pre>
          </section>
        )}
      </main>
    </div>
  )
}