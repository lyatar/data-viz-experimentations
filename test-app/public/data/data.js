let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'crypto-markets.csv'; 
let fileOutputName = 'myOutputFile.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

let json = csvToJson.getJsonFromCsv("myInputFile.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}

export default json;