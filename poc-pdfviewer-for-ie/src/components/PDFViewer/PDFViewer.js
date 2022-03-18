import React from 'react';
import MyPdfViewer2 from './MyPdfViewer2';

// Internet Explorer 6-11
const isIE = /*@cc_on!@*/ false || !!document.documentMode;

export default class PDFViewer extends React.Component {


  b64toBlob = (b64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  convertDataURIToBinary = (b64Data) => {
    var raw = window.atob(b64Data);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
 
    for(var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
 }
  

  componentDidMount = () => {
    const contentType = 'application/pdf';
    const base64Data = 
    'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
    'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
    'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
    'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
    'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
    'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
    'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
    'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
    'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
    'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
    'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
    'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
    'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G';


    if (isIE){        
        /* var url = '/pdfjs-2.13.216-dist/web/viewer.html?file=';
        var url = '/pdfjs-dist-viewer-min-es5-master/build/minified-es5/web/viewer.html?file=';
        var binaryData = [];
        binaryData.push(pdfAsArray);
        var dataPdf = window.URL.createObjectURL(new Blob(binaryData, {type: "application/pdf"}))
        document.getElementById('the-frame').setAttribute('src',url+ 'data:application/pdf;base64,' + encodeURIComponent(dataPdf));
        */
    }
    else {
        const blob = this.b64toBlob(base64Data, contentType);
        const blobUrl = URL.createObjectURL(blob);
        const iframe = document.getElementById('the-frame');
        iframe.src = blobUrl;
    }

  }

  render = () => {
    if (isIE){
      return (
        <div id='viewer' className='scrollable'>
            <MyPdfViewer2 />
        </div>
      )
    }
    else{
        return (
            <div id='viewer'>
                <iframe id='the-frame' className='scrollable'></iframe>
            </div>
          )
        }
  }

}
