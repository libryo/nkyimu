import { Generator } from '../../build/src/Engine/Generator';
import { forDisplay } from '../../build/src/common/helpers';

function displayResult(source) {
  const generated = (new Generator()).fromText(source);

  let display = document.querySelector('pre');

  if (!display) {
    display = document.createElement('pre');
    document.querySelector('body').appendChild(display);
  }

  display.innerHTML = forDisplay(generated.toXML());

  console.log(generated);
}

function handleFileSelect(evt) {
  var file = evt.target.files[0];

  if (file.type !== 'text/xml') {
    return;
  }

  const reader = new FileReader();
  reader.onload = ((theFile) => {
    return (e) =>  {
      displayResult(e.target.result)
    };
  })(file);

  reader.readAsText(file);
}

document.getElementById('akn').addEventListener('change', handleFileSelect, false);

