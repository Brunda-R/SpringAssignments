// module.exports="I'm a string";

// module.exports.hello=()=>"Hello user";
// module.exports.bye=()=>"Bye user";

//1. Define a global
// foo=()=>"Hello User";

// //2.Anonymous function
// module.exports=()=>"Bye";

//3.Export a named function
// exports.fiz = function () {
//       console.log('fiz!');
//     }


//PATTERN 4: EXPORT AN ANONYMOUS OBJECT

// buz.js
    // var Buz = function () {};
    // Buz.prototype.log = function () {
    //   console.log('buz!');
    // };
    // module.exports = new Buz();

  //  PATTERN 5: EXPORT A NAMED OBJECT
 // baz.js
    // var Baz = function () {};
    // Baz.prototype.log = function () {
    //   console.log('baz!');
    // };

    // exports.Baz = new Baz();


   // PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE
 // doo.js
    // var Doo = function () {};
    // Doo.prototype.log = function () {
    //     console.log('doo!');
    // }
    // module.exports = Doo;


    // PATTERN 7: EXPORT A NAMED PROTOTYPE
// qux.js
    var Qux = function () {};
    Qux.prototype.log = function () {
      console.log('baz!');
    };
    exports.Qux = Qux;