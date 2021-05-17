// function printName(name,surname){
//   console.log(`name: ${name} surname:${surname}`)
// }

// printName("ayse","turk");

///OBJECT

// var color="red";

// var made="toyota";

// var year=2010;

// console.log(color);
// console.log(made);
// console.log(year);

// var car={
//   color:"red",
//   made:"toyota",
//   year:2010
// }

// console.log(car);


// console.log("type of car:" +typeof(car));


// console.log("my car color is" +car.color);


// console.log("my car made by" +car.made);


// console.log("my car yea is" +car.year);

///

// let person={
//   name:"murat",
//   surname:"yildiz",
//   married:true,
//   age:23,
//   salary:1800,
//   gender:"man"
// }
// console.log(typeof(person));
// console.log(person);

// console.log("person name is"+ person.name);

// console.log("person type is"+ typeof( person.name));

// console.log("person age type of "+typeof(person.age));

// console.log(person.married);

// console.log("person is married data type is"+typeof(person.married));


// console.log(person['name']);

// console.log(person['age']);


// person.name="kemal";

// console.log(person);

// person.surname="kuzu";
// console.log(person);


// person.age=35;
// console.log(person);


// person['name']="halil";
// person['surname']="dogan";
// person['age']=40;

// console.log(person);

// person.job="it manager";

// console.log(person);

// person.city="new york";


// console.log(person);


// var user={
//   person1:{
//     name:"mustafa",
//     surname:"cetin",
//     employed:true
    
//   },
  
//   person2:{
//     name:"john",
//     salary:2400,
//     year:2010
//   },
  
//   person3:{
//     name:"bush",
//     departmant:"it",
//     language:"english"
    
//   },
  
//   person4:{
//     name:"ali",
//     salary:8000,
//     languages:["english","turkish","spanish"]
//   }
// }


// console.log(user);



// console.log(user.person4);

// console.log(user.person1);

// console.log(user.person3.name);//bush


// console.log(user[1]);

// console.log(user.person4.languages);//["english", "turkish", "spanish"]


// console.log(user.person4.languages[1]);//turkish

// console.log(typeof(user));//object

// console.log(typeof(user.person4));//object

// console.log(typeof(user.person4.languages));//object


//Array

// let person=["mustafa","doctor",1800,"married","new york"];

//  console.log(typeof(person));//object

// console.log(person);//["mustafa", "doctor", 1800, "married", "new york"]

// console.log(typeof(person[1]));//string

// console.log(typeof(person[2]));//number

// person[1]="john";
// console.log(person);//["mustafa", "john", 1800, "married", "new york"]

// person[0]="bush";
// console.log(person);//["bush", "john", 1800, "married", "new york"]

// person[4]="california";
// console.log(person);//["bush", "john", 1800, "married", "california"]

// console.log(person.length);//5


// person[7]="it manager";
// console.log(person);//["bush", "john", 1800, "married", "california", undefined, undefined, "it manager"]

// console.log(person.length);//8


// console.log(person[0].length);//4


// person[5]=1800;
// person[6]="new york city";

// console.log(person);


///push,pop shift unshift concat

let fruit=["orange","pineapple","melon","kivi","apple","watermelon"];


console.log(fruit);

fruit.push("grapes");



console.log(fruit);////["orange", "pineapple", "melon", "kivi", "apple", "watermelon", "grapes"]

fruit.push("banana");
console.log(fruit);//["orange", "pineapple", "melon", "kivi", "apple", "watermelon", "grapes", "banana"]


//unshift for add new items at the begining of array use unshift code fruit.
//unshift()


fruit.unshift("patotoes");
console.log(fruit);//["patotoes", "orange", "pineapple", "melon", "kivi", "apple", "watermelon", "grapes", "banana"]


fruit.unshift("tomotes");
console.log(fruit);//["tomotes", "patotoes", "orange", "pineapple", "melon", "kivi", "apple", "watermelon", "grapes", "banana"]


///pop() use for delete last item of array

fruit.pop();
console.log(fruit);//["tomotes", "patotoes", "orange", "pineapple", "melon", "kivi", "apple", "watermelon", "grapes"]

fruit.pop();
console.log(fruit);//["tomotes", "patotoes", "orange", "pineapple", "melon", "kivi", "apple", "watermelon"]

//shift use for delete

fruit.shift();
console.log(fruit);//["patotoes", "orange", "pineapple", "melon", "kivi", "apple", "watermelon"]

fruit.shift();
console.log(fruit);//["orange", "pineapple", "melon", "kivi", "apple", "watermelon"]

//concat

let food=["burger","meat","beef","kfc"];

let fruitFood=fruit.concat(food);
console.log(fruitFood);//["orange", "pineapple", "melon", "kivi", "apple", "watermelon"]



//Array.isArray use for array is arry or not true/false
console.log(Array.isArray(fruit));//true


console.log(fruit.indexOf("pineapple"));//1

console.log(fruit.indexOf("kivi"));//3


//splice



fruitFood.splice(1,2);
console.log(fruitFood);//["orange", "kivi", "apple", "watermelon", "burger", "meat", "beef", "kfc"]

fruitFood.splice(0,3);
console.log(fruitFood);//["watermelon", "burger", "meat", "beef", "kfc"]


fruitFood.splice(1,0,"eggplanets","groundnut","wallnut");
console.log(fruitFood);//["watermelon", "eggplanets", "groundnut", "wallnut", "burger", "meat", "beef", "kfc"]



fruitFood.splice(1,2,"pizza","steer","beef");

console.log(fruitFood);//["watermelon", "pizza", "steer", "beef", "wallnut", "burger", "meat", "beef", "kfc"]


























