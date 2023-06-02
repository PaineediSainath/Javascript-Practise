   function after2sec(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Resolved");
        },3000)
    })
   }

   async function asynccall(){
    console.log('calling');

    const result = await after2sec();
    console.log('result:',result)
   }
   asynccall();