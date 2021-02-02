(function(){
    'use strict';

    const myForm = document.getElementById('myForm');
    let madlib = document.getElementById('madlib');
    
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        let words = "";
        let beverage = document.querySelector('#beverage').value;
        let tool = document.querySelector('#tool').value;
        let ingred = document.querySelector('#ingred').value;
        let liquid = document.querySelector('#liquid').value;
        let name = document.querySelector('#name').value;
        let flavor = document.querySelector('#flavor').value;
        console.log(`The words are ${beverage} ${tool} ${ingred} ${liquid} ${name} ${flavor}`);

        if(beverage && tool && ingred && flavor != "---" && name && liquid != "---") {     
            newPage(beverage, tool, ingred, flavor, name, liquid);
        }
        else {
            if(beverage == "") {
                words = 'Please enter your favorite breakfast drink <br>';
            }
            if(tool == "") {
                words += 'Please enter a kitchen tool in the second box <br>';
            }
            if(ingred == "") {
                words += "Please enter an ingredient in the third box <br>";
            }
            if(liquid == "---") {
                words += "Please choose a liquid <br>";
            }
            if(name == "") {
                words += "Please enter a name in the fifth box <br>";
            }
            if(flavor == "---") {
                words += "Please choose a flavor <br>";
            }
        }
        madlib.innerHTML = '<br>' + words; 
    })


    

}());

function newPage(beverage, tool, ingred, flavor, name, liquid){
    let eachField;
        let formData = document.querySelectorAll("input[type=text]");
        for(eachField of formData) {
            eachField.value = "";
        }
    let select = document.querySelector("#liquid");
    select.value = "---";
    let select2 = document.querySelector("#flavor");
    select2.value = "---";


    document.querySelector('#myForm').className = "hidden";
    document.querySelector('#result').className = "shown";
    document.querySelector("#title").className = "shown";
   
    
    if(liquid === "orange juice") {
        document.querySelector("#title").innerHTML = "Where's the nearest coffee shop?";
        document.querySelector('#result').innerHTML = `We need to make a ${beverage} since I have to wake up early for school. 
        We need a cup, measuring spoon, and a ${tool}. We'll heat the ${liquid} and add the ${ingred} to the drink. Now to strir it up! 
        Ewww, orange juice... Well, look's like ${name} and I will be buying an iced coffee on the way to school!`;
    }


    if(liquid === "soda") {
        document.querySelector("#title").innerHTML = "Where's the nearest coffee shop?";
        document.querySelector('#result').innerHTML = `We need to make a ${beverage} since I have to wake up early for school. 
        We need a cup, measuring spoon, and a ${tool}. We'll heat the ${liquid} and add the ${ingred} to the drink. Now to strir it up! 
        The bubbles from the soda... oof. Look's like ${name} and I will be buying an iced coffee on the way to school!`;
    }


    if(liquid === "cream" || liquid === "milk") {
        document.querySelector("#title").innerHTML = "The Perfect Morning...";
        document.querySelector('#result').innerHTML = `We need to make a ${beverage} since I have to wake up early for school. 
        We need a cup, measuring spoon, and a ${tool}. We'll heat the ${liquid} and add the ${ingred} to the drink. Now to strir it up! 
        Mmmmm, I bet ${name} will ask for one when they come over to study. I love the added ${flavor}!`;  
    }

    document.querySelector('body').className = "boughtCoffee";
    var returnButt = document.querySelector('#returnButton');
    returnButt.className = 'shown';
    document.querySelector('footer').className = "hidden";
    
    
    returnButt.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#result').className = "hidden";
        document.querySelector("#title").className = "hidden";
        returnButt.className = 'hidden';

        document.querySelector('#myForm').className = "shown";
        document.querySelector('#mainTit').className = "shown";
        document.querySelector('body').className = "mainPage";
        document.querySelector('footer').className = "shown";
    });
}


