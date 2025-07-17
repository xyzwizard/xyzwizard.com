// assets/js/form-dropdowns.js
document.addEventListener('DOMContentLoaded', () => {
  const materialSelect   = document.getElementById('material');
  const colorSelect      = document.getElementById('color');
  const layerHeightSelect= document.getElementById('layerHeight');

  // define your options:
  const options = {
    PLA: {
      colors: ['Red', 'Blue', 'Green', 'Black', 'White'],
      layers: ['0.08 mm', '0.12 mm', '0.16 mm', '0.20 mm', '0.24 mm']
    },
    ASA: {
      colors: ['Black', 'Grey'],
      layers: ['0.08 mm', '0.12 mm', '0.16 mm', '0.20 mm', '0.24 mm']
    },
    PETG: {
      colors: [ 'Black', 'Dark Purple', 'Grey'],
      layers: ['0.08 mm', '0.12 mm', '0.16 mm', '0.20 mm', '0.24 mm']
    },
    Polycarbonate: {
      colors: ['Natural', 'Black'],
      layers: ['0.12 mm', '0.16 mm', '0.20 mm']
    },
    Nylon: {
      colors: ['Natural'],
      layers: [ '0.12 mm', '0.16 mm', '0.20 mm']
    },
    Resin: {
      colors: ['Grey', 'White', 'Black', 'Clear', 'Transluscent Green'],
      layers: ['30 microns', '40 microns', '50 microns']
    }
  };

  function populate(selectEl, items) {
    selectEl.innerHTML = ''; // clear
    selectEl.append(new Option('– Select –', ''));
    items.forEach(item => {
      selectEl.append(new Option(item, item));
    });
    selectEl.disabled = false;
  }

  materialSelect.addEventListener('change', () => {
    const mat = materialSelect.value;
    if (options[mat]) {
      populate(colorSelect,       options[mat].colors);
      populate(layerHeightSelect, options[mat].layers);
    } else {
      // reset both if no valid material
      colorSelect.innerHTML       = '<option>– Select Material First –</option>';
      layerHeightSelect.innerHTML = '<option>– Select Material First –</option>';
      colorSelect.disabled        = true;
      layerHeightSelect.disabled  = true;
    }
  });
});
