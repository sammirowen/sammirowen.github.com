(function(){ 
    'use strict';

    console.log("reading js");
    const preloader = document.getElementById('preloader');
	preloader.className = 'fadeout';

    // wait until the animation has completed
		preloader.addEventListener('animationend', function () {

			//once the animation is done, remove the preloader div.
			preloader.style.display = 'none';
		});


    //these access all the pictures except the main title and add a new picture on 
    //mouse over and then revert it back to the original picture when mousedout
    const firstPic = document.getElementById("firstPic");
    firstPic.addEventListener("mouseover", function(){
        firstPic.src = "images/pinkBathing.png"
    });

    firstPic.addEventListener("mouseout", function(){
        firstPic.src = "./images/pinkBathingSuit.png"
    });

    const secondPic = document.getElementById("secondPic");
    secondPic.addEventListener("mouseover", function(){
        secondPic.src = "./images/PlaidTop.png";
    });

    secondPic.addEventListener("mouseout", function(){
        secondPic.src = "./images/plaidDress.jpg"
    });

    const thirdPic = document.getElementById("thirdPic");
    thirdPic.addEventListener("mouseover", function(){
        thirdPic.src = "./images/overallDrawing.jpg";
    });

    thirdPic.addEventListener("mouseout", function(){
        thirdPic.src = "./images/flowerOveralls.svg"
    });

    const fourthPic = document.getElementById("fourthPic");
    fourthPic.addEventListener("mouseover", function(){
        fourthPic.src = "./images/adultOveralls.jpg";
    });

    fourthPic.addEventListener("mouseout", function(){
        fourthPic.src = "./images/overallAdults.jpg"
    });

    const fifthPic = document.getElementById("fifthPic");
    fifthPic.addEventListener("mouseover", function(){
        fifthPic.src = "./images/blueClothes.jpg";
    });

    fifthPic.addEventListener("mouseout", function(){
        fifthPic.src = "./images/pinkShirt.jpg"
    });
}());