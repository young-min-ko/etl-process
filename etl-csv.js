const fs = require('fs');
const csv = require('csv-parser');


fs.createReadStream('/Users/youngminko/Desktop/recipes.csv', { encoding: 'utf8' })
  .on('error', (err) => {
    console.log(err);
  })
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    row.ingredients = row.ingredients.replace('{', '[').replace('}',']');
    row.directions = rows.directions.replace('')
    console.log('transform', row);

  })
  .on('end', (data) => {
    console.log(data);

  })
