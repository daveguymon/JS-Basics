//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
  if(name==="Tyler"){
    return true;
  } else {
    return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
  var userName = prompt("What is your name?");
  return userName;
  
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 function welcome(){
   var response = getName();
   alert("Welcome, " + response);
 }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  // Parameters are variable placeholders that are part of the function's shell. Arguments are types received by the function when it is invoked. Arguments are assigned to their corresponding parameter within the function and used by the function to create an output.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // falsy values include 0, '', false, null, undefined, & NaN

  // To check if something is falsy, you can use a function like the one below:

// var val='';

//   function isFalsy(a){
//     if(!a){
//       return 'Falsy';
//     } else {
//       return 'Truthy';
//     }
//   }

//   isFalsy(val);



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){
    var name = prompt('What is your name?');
    return name;
  }

  
  


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName
alert(newMyName);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
    return function(){
      var myName = prompt('What is your name?');
      return myName;
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.
innerFn;