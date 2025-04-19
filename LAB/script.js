const intervalId = setInterval((name,lastname)=> {
    console.log(name, lastname+(Math.random()+1).toFixed(2));
}, 500, 'Diego -','Arroyo');

setTimeout(()=>{
    clearInterval(intervalId)
}, 1000);