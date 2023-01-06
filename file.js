const fs = require('fs');
fs.readFile('./test.txt',(error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());
});
fs.writeFile('./test.txt','hello world',()=>{
    console.log('Ok bye');
});
if(!fs.existsSync('./dossier')){
    fs.mkdir('./dossier',(error)=>{
        if(error){
            console.log(error);
        }
        console.log('dossier créé');
})}
if(fs.existsSync('./dossier/deleted.txt')){
    fs.unlink('./dossier/deleted.txt',(error)=>{
        if(error){
            console.log(error);
        }
        console.log('fichier supprimé');
    })
}