import { Engine, Helpers } from '../../build/src';

function displayResult(source) {
  const generated = (new Engine.Generator()).fromText(source);

  let display = document.querySelector('pre');

  if (!display) {
    display = document.createElement('pre');
    document.querySelector('body').appendChild(display);
  }

  display.innerHTML = Helpers.forDisplay(generated.toXML());

  console.log(generated);
}

function handleFileSelect(evt) {
  const file = evt.target.files[0];

  if (file.type !== 'text/xml') {
    return;
  }

  const reader = new FileReader();
  reader.onload = (theFile => (e) => {
    displayResult(e.target.result);
  })(file);

  reader.readAsText(file);
}

document.getElementById('akn').addEventListener('change', handleFileSelect, false);
