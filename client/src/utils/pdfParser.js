let pdfjsLib

async function loadPdfJs() {
  if (!pdfjsLib) {
    pdfjsLib = await import('pdfjs-dist')

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
  }

  return pdfjsLib
}

export async function extractTextFromPDF(file) {
  const lib = await loadPdfJs()

  const arrayBuffer = await file.arrayBuffer()

  const pdf = await lib.getDocument({
    data: arrayBuffer
  }).promise

  let fullText = ''

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)

    const content = await page.getTextContent()

    const pageText = content.items
      .map((item) => item.str)
      .join(' ')

    fullText += pageText + '\n'
  }

  return fullText.trim()
}