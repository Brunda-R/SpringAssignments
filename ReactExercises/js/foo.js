//  console.log(require('./bar.js'));
//  var bar = require('./bar.js');
// // console.log(bar.hello());
// // console.log(bar.bye());

// //1. Define a global
// console.log(foo());

// //2.Anonymous function
// console.log(bar());

//3.Export a named function
// var foo=require('./bar.js').fiz;
// console.log(foo());


//PATTERN 4: EXPORT AN ANONYMOUS OBJECT


 // var buz = require('./bar.js');
 //    buz.log();

  //  PATTERN 5: EXPORT A NAMED OBJECT


   // var baz = require('./bar.js').Baz;
   //  baz.log();

   //PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE

    // var Doo = require('./bar.js');
    // var doo = new Doo();
    // doo.log();

    //PATTERN 7: EXPORT A NAMED PROTOTYPE

    var Qux = require('./bar.js').Qux;
    var qux = new Qux();
    qux.log();