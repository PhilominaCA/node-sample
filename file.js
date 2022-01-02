const fs=require("fs");//file system
const quote ="The road to success is under construction!";

const [,,sizee]=process.argv;

const generateFiles=(elem)=> {
    for(let i=1;i<=elem;i++)
{
    fs.writeFile(`./backups/test-${i}.txt`,quote,(err)=>{
        console.log("done!");
    })

}
};
generateFiles(+sizee);

//fs.readFile("./abc.txt","utf-8",(err,data)=>{
  //  console.log(data);
//});


/* // 10 file creation task
const quote ="The road to success is under construction!";
for(let i=1;i<=10;i++)
{
    fs.writeFile(`./backups/test-${i}.txt`,quote,(err)=>{
        console.log("done!");
    })

}



//copy file content task
fs.readFile("./abc.txt","utf-8",(err,data)=>{
    fs.writeFile(`.cool.txt`,data,(err)=>{
        console.log("done!");
    })
});


//file deletion task

//first method
fs.unlink('tobeDeleted.css', (err) => {
    if (err) {
        throw err;
    }

    console.log("Deleted !");
});

//second method 

try {
    fs.unlinkSync('tobeDeleted.css');
    console.log("Deleted !");
} catch (error) {
    console.log(error);
}
*/