let array = process.argv.slice(2,process.argv.length).sort((a,b)=> a - b);
for (const i of array) {
  if (i < 0 || !Number.isFinite(i)) {
    //pass
  } else {
    setTimeout(()=>{
      console.log('sound' + "\007");
    },i * 1000);
  }
    
}