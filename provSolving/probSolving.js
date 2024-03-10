// Write a method or function that accepts a string. The method or function should return a boolean that describes whether or not the string has an even number of characters.



// write a method or a function that returns true or false if a string has an even number of charcthers.

// we will use function .length. When doing even or odd problems always use modulus "%"


function aWord(){

    let schools = ["Harvard", "Stanford", "MIT", "Yale"]

    if (schools.length % 2 == 0){
        return "even"
    }else{
        return "odd";
    }
}
console.log (aWord())


// ------------------------------------
//Update your previous method or function so it accepts an array. The method or function should return a boolean that describes whether or not the array's length is an even number.

// ----------------------------------------

/* 

Reflect
Before continuing, take some time to reflect on the following questions.

What do you like about this process?
    I like the idea of breaking down a problem to its rawest form.
What might make this process challenging?
    I've always struggled with sudocode. I have a problem with explaining a process I'm wanting to do and then explain it to others so they can understand.
Are there any steps you would add or modify?
    No I think the lesson is good the way it is.
*/


/*
-----------------------------------------
Challenge 3
Write a method or function that accepts a number from 1-24 that represents the current time rounted to the closest hour in 24-hour military time. (i.e. 11 = 11:00 AM, 16 = 4:00 PM). The function should return a different greeting based on the time of day.

4 AM - 11 AM: Good morning!
12 PM - 4 PM: Good afternoon!
5 PM - 8PM: Good evening!
9 PM - 3 AM: Good night!
*/

// write a function or a method that will take numbers 1-24 (this will represent the hours in the day). depending on the time we will need to change the greeting to fit the time in day. morning,afternoon,evening

// data that will be needed is a if statement alone with a .time method or .interger method to represent .00 for military hrs. 

// after doing furing research i might just need to create maybe 2-3 variables to represent hours and minutes and create an if statement

function getTime(hours){
    if (hours >= 4 && hours <= 11){
        return ("Good Morning")
    }else if (hours >=12 && hours <= 16){
        return ("Good Afternoon!")
    }else if (hours >= 20 && hours <= 19){
        return ("Good Evening")
    }else{
        return ("Good Night")
    }
   
}
console.log (getTime(20))

//dasd 