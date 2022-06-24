function importData() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    content.innerText = reader.result;
    var achstring = reader.result;
    var textByLine = achstring.split("\n");
    console.log(textByLine[0]);
  });

  if (file) {
    reader.readAsText(file);
  }
}

function showText(results)
{
    document.getElementById(results).style.display = "table";
}