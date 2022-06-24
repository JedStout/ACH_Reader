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
  var data = achData.innerText;
  var textByLine = data.split("\n");
  console.log(textByLine[0]);
}

showButton = (results)=> {document.getElementById(results).style.display = "table";}
showText = (analyzeResults)=> {document.getElementById(analyzeResults).style.display = "table";}