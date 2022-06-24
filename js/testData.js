function importData() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    content.innerText = reader.result;
    var achstring = reader.result;
    stringifyData(achstring);
  });

  if (file) {
    reader.readAsText(file);
  }
}

function stringifyData(achstring) {
  console.log(achstring);
}