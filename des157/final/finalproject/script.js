(function () {
    'using strict';

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

    //find the box you're dragging or dropping from
    for(j = 0; j < box.length; j++){ 
        const boxChosen = box[j];
        boxChosen.addEventListener('dragenter', function(e) {
            e.preventDefault();
        });

        boxChosen.addEventListener('dragover', function(e){
            e.preventDefault();
        });

        //add and remove an arrow to tell users what to do with the interactivity
        boxChosen.addEventListener('drop', function(e){
            const picture = document.getElementById('mainPic');
            picture.className = "hidden";
            const pictureFrame = document.getElementById('frame');
            pictureFrame.src = "./images/box.png";
            const title = document.getElementById('yearTitle');
            const description = document.getElementById('description');
            const arrow = document.getElementById('arrow');
            const suit = e.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(suit);

            e.target.appendChild(draggable);
            draggable.classList.remove('hidden');

            //change title on the picture frame and the notecard with the description
            if(suit === "suit1") {
                arrow.className = "hidden";
                document.getElementById('arrow2').className = "shown";
                
                var chrisPic = document.getElementById('photo2');
                chrisPic.src = "./images/IMG_0560.jpg";
                title.innerHTML = "Disneyland";

                description.src = "./images/note1.png";
            }
            else if(suit === "suit2") {
                title.innerHTML = "Birks";
                document.getElementById('photo1').src = "./images/IMG_0562.jpg";
                document.getElementById('photo1').style.width = '200px';
                description.src = "./images/shoesNote.png";
            }
            else if(suit === "suit3") {
                title.innerHTML = "Holidays";
                document.getElementById('photo4').src = "./images/cookies.png";
                description.src = "./images/cookieNote.png";
            }
            else {
                title.innerHTML = "Tea Time";
                description.src = "./images/teaNote.png";
            }

            if(e.target === document.getElementById('mainFrame')){
                draggable.classList.add('show');
            }
            if(e.target != document.getElementById('mainFrame')){
                picture.classList.remove('hidden');
                pictureFrame.src = "./images/boxTransparent.png";
                document.getElementById('arrow2').className = "hidden";
                title.innerHTML = "The 1990's";
            }
        });
    }

}());