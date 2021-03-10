(function () {
    'using strict';

    alert("Hello! \n 1. Please find the information about the 1950's swimsuit. \n 2. Please find the information about the 1970's swimsuit \n 3. Find the sweatshirt section")

    //for picture frame area
    const suit = document.querySelectorAll('.moveable');
    const box = document.querySelectorAll('.box');

    for(i = 0; i < suit.length; i++) {
        suit[i].addEventListener('dragstart', dragStart);
    }

    function dragStart(e) {
        console.log("drag start");
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.className = 'hidden';
    }, 0);
    }

    for(j = 0; j < box.length; j++){ 
        const boxChosen = box[j];
        boxChosen.addEventListener('dragenter', function(e) {
            e.preventDefault();
        });

        boxChosen.addEventListener('dragover', function(e){
            e.preventDefault();
        });

        boxChosen.addEventListener('drop', function(e){
            const picture = document.getElementById('mainPic');
            picture.className = "hidden";
            const title = document.getElementById('yearTitle');
            const description = document.getElementById('description');

            const suit = e.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(suit);

            e.target.appendChild(draggable);
            draggable.classList.remove('hidden');

            //change title on the picture frame and the description below
            if(suit === "suit1") {
                title.innerHTML = "The 1950's";
                description.innerHTML = "Swimsuits in the 1950’s were less about swimming and more about looking like a pinup, many included firmed bra cups and women wore separate swim panties to provide more shaping and smoothing. In regards to pattern, the material of the 1950’s were more bold than the 1940’s, with popular patterns including plaid, color blocking, stripes, and gingham. Polka dots were surprisingly not popular. Some notable 1950’s American swimwear designers included Clair McCardell, Tina Leser, Tom Brigance, and Carolyn Schurer.";
            }
            else if(suit === "suit2") {
                title.innerHTML = "The 1960's";
                description.innerHTML = "In the early part of the 60’s, swimwear was still pretty conservative. However, in the mid 60’s, fashion designers began to focus on creating clothing for the younger generation as they became more celebrated across Europe and the U.S. Thus, swimsuits became less modest with the introduction of the bikini, side mesh net panels, and cut out midriffs.";
            }
            else if(suit === "suit3") {
                title.innerHTML = "The 1970's";
                description.innerHTML = " 70’s swimsuits saw a surge of skin tone and nude tones that were accented with small floral cut outs, fringe pieces, and low backs. Much like the rest of the 70’s, swimsuits dominantly had floral, geometric, and paisley prints, and was groovy and quirky.";
            }
            else {
                title.innerHTML = "The 1980's";
                description.innerHTML = "The 1980’s were foraging years for the styles to follow, with high-cut, neon, shine, and animal print in style. Swimwear trends born in the 80’s included neon colors, scoop necks, and V-hips. On the beach there wasn’t a lot left up to the imagination in terms of cut and style!";
            }

            if(e.target === document.getElementById('mainBox')){
                draggable.classList.add('show');
            }
            if(e.target != document.getElementById('mainBox')){
                picture.classList.remove('hidden');
                title.innerHTML = "The 1990's";
                description.innerHTML = "Swimsuits were all about making a statement in the 1990’s--Cheetah print was a popular motif. High cut, bright colors were in, from Baywatch red to sunshine yellow, neon pink and tangy orange. As Cosmopolitan said, bright colors blazed brightly against the sea, sky, and even your tan. Angular cuts, frills, stripes and crochet often appeared on swimsuits, and rollerblading was the hit activity!";
            }
        });
    }

    //picture section
    const firstPic = document.getElementById("photo1");
    firstPic.addEventListener("mouseover", function(){
        firstPic.src = "./images/plaidTop.png";
        firstPic.style.width = "230px";
    });
    firstPic.addEventListener("mouseout", function(){
        firstPic.src = "./images/plaidDress.jpg"
    });

    const secondPic = document.getElementById("photo2");
    secondPic.addEventListener("mouseover", function(){
        secondPic.src = "./images/blueClothes.jpg";
        secondPic.style.width = "230px";
    });
    secondPic.addEventListener("mouseout", function(){
        secondPic.src = "./images/pinkShirt.jpg"
    });

    const thirdPic = document.getElementById("photo3");
    thirdPic.addEventListener("mouseover", function(){
        thirdPic.src = "./images/overallDrawing.jpg";
        thirdPic.style.width = "210px";
    });
    thirdPic.addEventListener("mouseout", function(){
        thirdPic.src = "./images/flowerOveralls.svg"
    });

    const fourthPic = document.getElementById("photo4");
    fourthPic.addEventListener("mouseover", function(){
        fourthPic.src = "./images/adultOveralls.jpg";
    });
    fourthPic.addEventListener("mouseout", function(){
        fourthPic.src = "./images/overallAdults.jpg"
    });



    //for sweatshirt area
    let scrollPos = 0;
    window.addEventListener('scroll', function() {
        scrollPos = window.pageYOffset;

        if(scrollPos >= "900") {
            const sweaters = document.getElementById('sweaterSection');
            sweaters.style.transform = 'translate(1000px, 20px)';
            sweaters.style.transition = "all 2s ease-out";
        }
      });

    
      //when window hits window.pageYOffset = 300px

}());