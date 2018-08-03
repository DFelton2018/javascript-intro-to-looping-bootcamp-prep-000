function forLoop(array) {
  for (let i=0; i<25; i++) {
    if (i===1) {
      array.push("I am 1 strange loop." )
    } else {
     array.push("I am ${i} strange loops.")
   }
  } return array;
}

function whileLoop(n) {

  while (n > 0) {
    console.log(--n)
  }
  
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}

 do{
<<<<<<< HEAD
    array.shift(1)
=======
    array.slice(1)
>>>>>>> 16353264b40ba49467b2d3200472303ee20eb7a3
 } while (array.length > 0 && maybeTrue());
 
  return array;
 }

