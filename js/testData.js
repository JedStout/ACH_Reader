function importData() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    content.innerText = reader.result;
    var achstring = reader.result;
    return achstring;
  });

  if (file) {
    reader.readAsText(file);
  }
}

function analyzeData(achData) {
  var data = achData.innerText,
      textByLine = data.split("\n"),
      firstRow = textByLine[0].split(" "),
      fileHeader = firstRow[0],
      destination = firstRow[1];

  if (fileHeader === '101') {
    console.log(fileHeader);
    if (fileHeader.startsWith('1')) {
      console.log('Record Type is 1 and ACH will continue processing')
    }
    return fileHeader;
  } else if (destination !== '0') {
    console.log(destination);
  } else {
    console.log(firstRow[2])
  };
  
}

showButton = (results)=> {document.getElementById(results).style.display = "table";}
showText = (analyzeResults)=> {document.getElementById(analyzeResults).style.display = "table";}
