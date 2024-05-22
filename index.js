// file handling
const fs = require('fs');

// read file
//fs.readFile('test.txt','utf-8',(err,data) => {
  //  if(err){
    //    console.log(err);
      //  return;

    //}
    //console.log(data.split());
//});

//read file synchronously
//try{
  //  const data = fs.readFileSync('test.txt','utf-8');
    //console.log(data);
//} catch (error){
  //  console.log(error);
//}

//write file
const data = '\n this is a new line of text.';
//  fs.writeFile('test.txt',data,(err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("file written successfully");
//  });


//write file in append mode
fs.appendFile('test.txt', data, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('file written successfully');
});