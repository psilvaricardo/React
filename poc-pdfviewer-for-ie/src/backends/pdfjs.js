
export default class PDFJs {
    init = (source, element) => {
      const iframe = document.createElement('iframe');
  
      iframe.src = `/pdfjs-1.9.426-dist/web/viewer.html?file=${source}`;
      iframe.width = '80%';
      iframe.height = '80%';
  
      element.appendChild(iframe);
    }
  }
