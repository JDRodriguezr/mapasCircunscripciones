const Xlsx = require('xlsx');
const fs = require('fs');

function leerExcel(ruta) {
  const workbook = Xlsx.readFile(ruta);
  const workbookSheets = workbook.SheetNames;
  //    console.log(workbookSheets);
  const sheet = workbookSheets[0];
  let dataExcel = Xlsx.utils.sheet_to_json(workbook.Sheets[sheet], {
    raw: true,
  });

  // crea un json basado en el excel
  fs.writeFile('baseDeDatos.json', JSON.stringify(dataExcel), (err) => {
    if (err) console.log(err);
    else {
      console.log('File written successfully\n');
    }
  });
}

leerExcel('b.xlsx');
