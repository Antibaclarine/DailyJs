// DATATYPES

// string
// number
// boolen
// object
// function

// TYPES OF OBJECTS

// object
// Date
//Array 
// String
// Number
// Boolen

// Datatypes that cannot contain values
// null
// undefined

let a="John"
console.log(typeof a);
let b =5
console.log(typeof 5);
let c=true
console.log(typeof c);
let d={}
console.log(typeof d);
let e= "new Date ()"
console.log(typeof e);
let f=function(){}
console.log(typeof f)

// math.sin is an expression that contains an angle measured in radians.It returns the sine of a number
let g=Math.sin(20)
console.log(typeof g);
let h=Math.sin(90)
console.log( h);
let m;
console.log(m);
let n;
console.log(n);
let p;
console.log(p);
let o;
console.log(o);
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)

let nums=[1,2,3] 
nums[0]=10
console.log(nums);
let word=["nancy","mercy","Ann"]
word[2]="Joel"
console.log(word);
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

// Math.round returns to the nearest interger
let calc=Math.round(34.7)
console.log(calc);

// Math.floor returns rounded down to its nearest interger
let mark=Math.floor((30.7+10.1)/2)
console.log(mark);

// Math.ceil returns rounded up to its neares value
let ceil=Math.ceil((30.7+10.1)/2)
console.log(ceil);

// Math.min returns the minumum value
let mini=Math.min(4,5,7,2,3)
console.log(mini);

// Math.max returns the maximum value
let maxxi=Math.max(30,4,50,20,70)
console.log(maxxi);

// Math.random returns a random number between 0 and 1
let random=Math.random(3,7,5,2,4)
console.log(random)
let ran=Math.floor(Math.random()*11)
console.log(ran)

// Math.abs returns the absolute value of x
let x=Math.abs(2-3);
console.log(x);

// Math.sqrt returns the square root
let square=Math.sqrt(100)
console.log(square);

// Math.pow(x,y)returns the value of x to the power of y
let pow=Math.pow(2,3)
console.log(pow);

// Math.E returns Euler's number
// let euler=Math.E()
// console.log(euler);


// Math.log returns the natural logarithm 
let l=Math.log(90)
console.log(l);

// Math.sin
let r=Math.sin(60)
console.log(r);

// Math.cos() returns the cosine of a number
let cos=Math.cos(60)
console.log(cos);

let name="Mary"
let ag=12
let nameAg=("My name ${name} is I am ${ag} yaers old")
console.log(nameAg)

// finding the last index
let arr=[3,4,5,6,7,8]
console.log(arr.length-1);

let string="javascript"
// toUppercase converts all the alphabet in a string to capital letters
console.log(string.toUpperCase());
// toLowercase converts all the alphabet in a string to small letters
console.log(string.toLowerCase());
// Gets a substring beginning at the specified location and having the specified length.
console.log(string.substr(2,4));
// Returns the substring at the specified location within a String object
console.log(string.substring(0,4));
// Split a string into substrings using the specified separator and return them as an array.
console.log(string.split());
console.log(string.split(''));
// takes a substring and if it exists in a string it returns the last position if it does not exist it returns -1 
console.log(string.lastIndexOf());
console.log(string.indexOf('javascript'));
// it takes many substring and joins them
console.log(string.concat("days","started"));

let sentence=" 30 days of coding "
// removes space at the beggining and end of a srting
console.log(sentence.trim());
console.log(sentence.trim(''));
// returns if the search subtring is in the string otherwise false
console.log(sentence.includes(30));
console.log(sentence.includes('fin'));
// replace text in a string, using a regular expression or search string
console.log(sentence.replace("coding","Javscript"));
// returns the last occurence of a substring in the string
let names=["Mary","ann","Mercy"]
console.log(sentence.lastIndexOf('coding'));
// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
console.log(sentence.startsWith('days'))
console.log(sentence.endsWith('coding'));
// Finds the first substring match in a regular expression search.
console.log(sentence.search("coding"));

const story="The quick brown fox jumped on the lazy dog"
const quick=(story.match(/the/g)|| []).length;
const fox=(story.match(/brown/g)|| []).length;
console.log(quick);
console.log(fox);

let person={
    name:"Clarine",
    age:30
};
console.log(person);
// dot notation to get one object
console.log(person.name);

let colors=["red","blue"]
colors[2]="green";
console.log(colors.length);

function greet(name,lastName){
    console.log("Hello" + " " +name +" " +lastName);
}
greet("John","Mary")

// function square(number){
//     return number *number;
// }

// let number=square(2);
// console.log(number);

// parseInt is used to convert float to Intergers
// parseFloat is used to convert inergers to float
let num=9.81
let numInt=parseInt(num)
console.log(numInt);

const challenge='30 days of Javascript'
console.log(challenge);
 const s=(challenge.match(/a/g) || [])
console.log(s);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(1));
console.log(challenge.split(''));
console.log(challenge.replace("Javascript","coding"));
console.log(challenge.charAt(12));
// charCodeAt  gives a unique code value of the character at a specified location
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(challenge.startsWith(3));
console.log(challenge.repeat(2));
console.log(challenge.trim(' '));
console.log(challenge.search("days"));
console.log(challenge.concat("coding"));

let age1=39;
age1+=2
console.log(age1);
age1++
console.log(age1);
++age1
console.log(age1);

if(age>age1 || numOne>numTwo){
    console.log(true)
}
else{
    console.log(false)
}
// implicit coercion
// When an operation like subtraction (-), multiplication (*), division (/) or modulus (%) is performed, all the values that are not number are converted into the number data type, as these operations can be performed between numbers only. Some examples of this are shown below.

let num2="10"
let num3=num2*1
console.log(num3);
console.log(num2*1);
console.log(num2/1);
console.log(num2-1);
console.log(num2*10);
console.log(typeof num3);

let q = Number(a)
console.log("q",typeof(a));

let t="Hey"
let u="there"
let tu=`${t} ${u} mercy`
console.log(tu);

let arr3=[1,3,4,5,6,7]
arr3.push(62)
console.log(arr3);
arr3.unshift(2)
console.log(arr3);
arr3.pop()
console.log(arr3);
arr3.shift()
console.log(arr3);
let result=arr3.map(
    (arr3)=>{
        return arr3 *2
    }
)
console.log(result);

arr3.sort((a,b)=> b-a)
console.log(arr3);

function divideArray(num9){
    if(num9.length<=1){
    return num9
}
let middle=Math.floor(num9.length/2);
let left=num9.slice(0,middle)
let right=num9.slice(middle)
console.log({left});
console.log({right});
return sortedArray(divideArray(left),divideArray(right))
}

function sortedArray(left,right){
    let emptyArray=[]
    while(left.length && right.length)
    if(left[0]<right[0]){
        emptyArray.push(left.shift())
    }
    else{
        emptyArray.push(right.shift())
    }
    console.log({emptyArray})
return[...emptyArray,...left,...right]
}
let num9=[4,2,10,30,5,3,1]
console.log(divideArray(num9));

function binary(num9,target){
    leftIndex=0
    rightIndex=num9.length-1
    while(leftIndex<=rightIndex){
        let middle=Math.floor((leftIndex+rightIndex)/2)
        if(num9[middle]===target){
            return middle;
        }
        else if(num9[middle]>target){
            right =middle-1
        }
        else{
            left= middle+1
        }
    }
return -1
}
let target=5
console.log(binary(num9,target));

