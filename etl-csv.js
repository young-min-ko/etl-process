const fs = require('fs');
const csv = require('csv-parser');

const readFilePath = '/Users/youngminko/hackreactor/full_dataset.csv';
const writeFilePath= '/Users/youngminko/hackreactor/test4.csv';


const readStream = fs.createReadStream(readFilePath, { encoding: 'utf8' })
  .on('error', (err) => {
    console.log(err);
  })
  .pipe(csv())

  const writeStream = fs.createWriteStream(writeFilePath);

  readStream.on('data', (row)=>{
    console.log(row);
    console.log(row.id);
    if (row[''] === '19612') {
      readStream.destroy();
    }
    row.ingredients = row.ingredients.replaceAll('\;', '').replaceAll('\"','').replaceAll('\\','').replaceAll(',', '\"\",\"\"').replace('[', '\"{\"\"').replace(']','\"\"}\"')
    row.directions = row.directions.replaceAll('\;', '').replaceAll('\"','').replaceAll('\\','').replaceAll(',', '\"\",\"\"').replace('[', '\"{\"\"').replace(']','\"\"}\"')
    row.NER = row.NER.replaceAll('\;', '').replaceAll('\"','').replaceAll('\\','').replaceAll(',', '\"\",\"\"').replace('[', '\"{\"\"').replace(']','\"\"}\"')
    let flat = `${row['']},\"${row.title}\",${row.ingredients},${row.directions},\"${row.link}\",\"${row.source}\",${row.NER}\n`
    console.log('transform', row.directions);

    writeStream.write(flat);
  })
