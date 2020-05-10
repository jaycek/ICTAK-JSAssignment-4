
var items =[];
// Question 1 - Start
// Write a JavaScript function to get an array and to read the first element of an array. 
// Check whether it is prime or not.

function checkPrime(){

    if(document.getElementById("num1").value != null && document.getElementById("num1").value.length != 0 ){

        var num1=parseInt(document.getElementById("num1").value);

        var flag = isPrime(num1)
    
        if(flag) {
            alert(`${num1} is a prime number`);
        }
        else{
            alert(`${num1} is not a prime number`);
        }
    }
    else{
        alert("Input a number");
    }
    
    
}

function isPrime(num1){
    for(var i = 2; i < num1; i++)
      if(num1 % i === 0) return false;
    return num1 > 1;
}

// Question 1 - End

//Question 2-  Start
// Write a JavaScript program to find the most frequent item of an array

function getMode(){
var items = document.getElementById("items").value.trim();

var item = document.getElementById("frqItem");
var counts = {};
var compare = -1;

var mostFrequent;
console.log(items.length);
console.log(items);
if(items.length==0){
     alert("Please input an array");
}
else{

    items = items.split(',')
    for(var i = 0, len = items.length; i < len; i++){
        var word = items[i];
        
        if(counts[word] === undefined){
            counts[word] = 1;
        }else{
            counts[word] = counts[word] + 1;
        }
        if(counts[word] > compare){
              compare = counts[word];
              mostFrequent = items[i];
        }
     }
     
     if(counts[mostFrequent] > 1){
     item.innerHTML =  mostFrequent;
     }
     else{
         item.innerHTML = "No frequent item";
     }
}
  
}

//Question 2 -- end

//Question 3 -- start
// Write a JavaScript program which accept a string as input and swap the case of each character

function swapcase(){
var str = document.getElementById("inputText").value;
var outStr = document.getElementById("outputText");
const regexLower = /([a-z])/;
const regexUpper = /([A-Z])/;
var newstr=[];

console.log(str);

if(str != null && str.length !=0 ){
    for(var i=0;i<str.length;i++){

        if(str[i].match(regexLower)){
            newstr[i] = str[i].toUpperCase();
        }
        else if (str[i].match(regexUpper)){
            newstr[i] = str[i].toLowerCase();
        }
        else{
            newstr[i]=str[i];
        }
    }
}
else
{
    alert("Please input a string");
}
outStr.innerHTML = newstr.join('');

}

//Question 3 - end

//Question 4 start
//Write a JavaScript program to find the sum of squares of the elements of an array.

function getSum(){
    
    var text = document.getElementById("items4").value;
    if(text != null && text.length!=0){
        var arr = text.split(",");
        var sum =0;

        if(arr!= null && arr.length !=0){
            for(var i=0;i<arr.length;i++){
                let item = parseFloat(arr[i]); 
                    sum+= item * item;
            }
        document.getElementById("sumSquares").innerHTML = `Sum of squares of array is ${sum}`;
        }
    }
    else{
        alert("Enter an array of numbers separated by commas");
    }


   
}

//Question 4 end

//Question 5 start
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration,
// check if the current number is odd or even, and display the message to the screen as odd or even
function checkOddEven(){

    for(var i=0;i<16;i++){
        if(i==0){
            alert ("0 is neither odd or even");
            continue;
        } 
        if(i%2 == 0){
        alert(`${i} is an even number`);
        }
        else
        { 
            alert(`${i} is an odd number`);
        }
    }
}
//Question 5 end 

//Question 6 start
//Write a JavaScript function to truncate a string if it is longer than the specified number of characters.
function trimString(){

    var txt = document.getElementById("item6").value;
    var maxlen=parseInt(document.getElementById("maxlen").value)||0;
    var output="";

    if(txt !=null  &&  txt.length !=0 ){
        output = txt;
        if(maxlen>0){
            output = txt.substring(0,maxlen);
        }
    }
    else{
        alert("Please enter a string");
    }
    document.getElementById("trimmedOutput").innerHTML = output;
}

//Question 6 end

//Question 7 start
//Write a JavaScript program that accept two integers and display the larger using findLarge() function.

function compareNums(){

    var num1 = parseInt(document.getElementById("num1item7").value)||0;
    var num2 = parseInt(document.getElementById("num2item7").value)||0;

    if(num1 == '' || num2 == ''){
        alert("Please enter the numbers");
    }
    else{
        var large = findLarge(num1,num2);
        document.getElementById("largeNumber").innerHTML=large;
    }
    
}

function findLarge(num1,num2){

   return((num1>num2)?  num1:num2);

}
//Question 7 end

//Question 8 start
//Write a JavaScript program using for…in to read the objects from an array entered
// by an user and to arrange it in alphabetical order.

function addItem(){

var slno = document.getElementById("slno");
var prodname=document.getElementById("prodname");
var qty=document.getElementById("qty");
var output = document.getElementById("posItems");

if(slno.value == "" || prodname.value =="" || qty.value==""){
    alert("Please input all fields");
}
else{
    function prodItem(){
        this.serialnum = slno.value;
        this.productname = prodname.value;
        this.quantity=qty.value;
    } 
    
    var item= new prodItem();
    items.push(item);
    output.value="";
    var x;
    items.forEach(function(itm){
        
        for(x in itm){
            output.value += itm[x] + " ";
        }
        output.value += "\n";
        // output.value += i.serialnum + " "  + i.productname + " " + i.quantity + "\n"
    })
    
    slno.value="";
    prodname.value="";
    qty.value="";
    
}

}

function sortItems(){
    var output = document.getElementById("posItems");
    if(items != null && items.length != 0){
        items.sort((a,b) => (a.productname > b.productname) ? 1 : ((b.productname > a.productname) ? -1 : 0));
        output.value="";
        items.forEach(function(i){
            output.value += i.serialnum + " "  + i.productname + " " + i.quantity + "\n"
        })
    }
    else{
        alert("There is nothing to sort");
    }
}


//Question 8 end

//Question 9 start
//Write a JavaScript program to print the letters of the word “Javascript” as below in each line using for…of. J Ja Jav . . Javascript

function displayWordLikeTree(){
    var word="Javascript";
    var prevletters="";
    var disp=document.getElementById('disp');
    for(const element of word){
        disp.value+= prevletters +element+ "\n";
        prevletters+= element;
    }
}

//Question 9 end

//Question 10 start
//Write a JavaScript program to construct the following pattern, using a nested for loop.
function createPattern(){

    var output = document.getElementById("patt");

    for(var row = 1;row<10;row++){
        for(var col=0;col<row;col++){
            output.value+= "*";
        }
        output.value+= "\n"
    }
}
//Question 10 end