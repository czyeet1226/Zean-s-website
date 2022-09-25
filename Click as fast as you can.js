function firstpage (){
    document.body.innerHTML = '';

    const Title = document.createElement("div");
    Title.innerText = "Click as fast as you can !";
    document.body.appendChild(Title);
    Title.style.textAlign = "center";
    Title.style.fontFamily = "cursive";
    Title.style.fontSize = "40px";
    Title.style.marginTop = "30px";

    const playbutton = document.createElement("button");
    playbutton.innerText = "Play";
    document.body.appendChild(playbutton);
    playbutton.style.marginLeft = "690px";
    playbutton.style.fontSize = "40px";
    playbutton.style.fontFamily = "cursive";
    playbutton.style.padding = "10px 40px 10px 40px";
    playbutton.style.marginTop = "30px"; 
    playbutton.style.borderRadius = "30px";
    playbutton.style.cursor = "pointer";
    playbutton.onclick = secondpage;
    counter = 0;
}
let counter = 0;
function secondpage (){
    document.body.innerHTML = "";

    const homebutton = document.createElement("button");
    homebutton.innerText = "";
    homebutton.style.backgroundColor = "white";
    homebutton.style.cursor = 'pointer';
    document.body.appendChild(homebutton);
    const homeimg = document.createElement('img');
    homeimg.src = "home.png";
    homeimg.style.height = '30px';
    homebutton.appendChild(homeimg);
    homebutton.onclick = firstpage;

    if (counter ==1){
        setTimeout(timeOut,5000);
        homebutton.disabled = true;
    }
    else if (counter>=1){
        homebutton.disabled = true;
    }

    const scorecontainer = document.createElement("div");
    scorecontainer.setAttribute("id","scorecontainer")
    scorecontainer.innerText = "";
    scorecontainer.style.textAlign = 'center';
    document.body.appendChild(scorecontainer);
    scores();

    const bigcontainer = document.createElement("div");
    bigcontainer.innerText = "";
    document.body.appendChild(bigcontainer);
    bigcontainer.setAttribute("id","bigcontainer");
    reload();
}
function reload(){
    const bigcontainer = document.getElementById("bigcontainer")
    bigcontainer.innerHTML = "";
    const container = document.createElement("div");
    container.innerHTML = "";
    bigcontainer.appendChild(container);
    container.style.border = "1px solid black";
    container.style.height = "300px";
    container.style.width = "300px";
    container.style.display = "grid";
    container.style.border = "5px solid black";
    container.style.marginLeft = "610px";
    container.style.gridTemplateColumns = "100px 100px 100px";
    container.style.gridTemplateRows = "100px 100px 100px";

    const box1 = document.createElement("button");
    box1.setAttribute("id","box1");
    box1.innerText = "";
    box1.style.backgroundColor = "white";
    box1.style.cursor = 'pointer';
    container.appendChild(box1);
    const img1 = document.createElement("img");
    img1.setAttribute("id","img1");
    img1.src = "";
    img1.style.height = "70px";
    img1.setAttribute("draggable","false");
    box1.appendChild(img1);

    const box2 = document.createElement("button");
    box2.setAttribute("id","box2");
    box2.innerText = "";
    box2.style.backgroundColor = "white";
    box2.style.cursor = 'pointer';
    container.appendChild(box2);
    const img2 = document.createElement("img");
    img2.setAttribute("id","img2");
    img2.src = "";
    img2.style.height = '70px';
    img2.setAttribute("draggable","false");
    box2.appendChild(img2);

    const box3 = document.createElement("button");
    box3.setAttribute("id","box3");
    box3.innerText = "";
    box3.style.backgroundColor = "white";
    box3.style.cursor = 'pointer';
    container.appendChild(box3);
    const img3 = document.createElement("img");
    img3.setAttribute("id","img3");
    img3.src = "";
    img3.style.height = '70px';
    img3.setAttribute("draggable","false");
    box3.appendChild(img3);

    const box4 = document.createElement("button");
    box4.setAttribute("id","box4");
    box4.innerText = "";
    box4.style.backgroundColor = "white";
    box4.style.cursor = 'pointer';
    container.appendChild(box4);
    const img4 = document.createElement("img");
    img4.setAttribute("id","img4");
    img4.src = "";
    img4.style.height = '70px';
    img4.setAttribute("draggable","false");
    box4.appendChild(img4);

    const box5 = document.createElement("button");
    box5.setAttribute("id","box5");
    box5.innerText = "";
    box5.style.backgroundColor = "white";
    box5.style.cursor = 'pointer';
    container.appendChild(box5);
    const img5 = document.createElement("img");
    img5.setAttribute("id","img5");
    img5.src = "";
    img5.style.height = '70px';
    img5.setAttribute("draggable","false");
    box5.appendChild(img5);

    const box6 = document.createElement("button");
    box6.setAttribute("id","box6");
    box6.innerText = "";
    box6.style.backgroundColor = "white";
    box6.style.cursor = 'pointer';
    container.appendChild(box6);
    const img6 = document.createElement("img");
    img6.setAttribute("id","img6");
    img6.src = "";
    img6.style.height = '70px';
    img6.setAttribute("draggable","false");
    box6.appendChild(img6);

    const box7 = document.createElement("button");
    box7.setAttribute("id","box7");
    box7.innerText = "";
    box7.style.backgroundColor = "white";
    box7.style.cursor = 'pointer';
    container.appendChild(box7);
    const img7 = document.createElement("img");
    img7.setAttribute("id","img7");
    img7.src = "";
    img7.style.height = '70px';
    img7.setAttribute("draggable","false");
    box7.appendChild(img7);

    const box8 = document.createElement("button");
    box8.setAttribute("id","box8");
    box8.innerText = "";
    box8.style.backgroundColor = "white";
    box8.style.cursor = 'pointer';
    container.appendChild(box8);
    const img8 = document.createElement("img");
    img8.setAttribute("id","img8");
    img8.src = "";
    img8.style.height = '70px';
    img8.setAttribute("draggable","false");
    box8.appendChild(img8);

    const box9 = document.createElement("button");
    box9.setAttribute("id","box9");
    box9.innerText = "";
    box9.style.backgroundColor = "white";
    box9.style.cursor = 'pointer';
    container.appendChild(box9);
    const img9 = document.createElement("img");
    img9.setAttribute("id","img9");
    img9.src = "";
    img9.style.height = '70px';
    img9.setAttribute("draggable","false");
    box9.appendChild(img9);

    jumpout();
  
}

function jumpout (){
    counter++;

    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");
    const box5 = document.getElementById("box5");
    const box6 = document.getElementById("box6");
    const box7 = document.getElementById("box7");
    const box8 = document.getElementById("box8");
    const box9 = document.getElementById("box9");


    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    const img4 = document.getElementById("img4");
    const img5 = document.getElementById("img5");
    const img6 = document.getElementById("img6");
    const img7 = document.getElementById("img7");
    const img8 = document.getElementById("img8");
    const img9 = document.getElementById("img9");

    const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9];
    const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    const a = Math.floor(Math.random()*images.length);
    const randomPic = images[a];
    const randomBox = boxes[a];
    randomBox.setAttribute("id","randomBox");

    img1.src = "";
    img2.src = "";
    img3.src = "";
    img4.src = "";
    img5.src = "";
    img6.src = "";
    img7.src = "";
    img8.src = "";
    img9.src = "";

    randomPic.src = "monster.png";
    randomBox.onclick = secondpage;
}    
function scores(){
    const scorecontainer = document.getElementById("scorecontainer");
    scorecontainer.innerText = "";
    const score = document.createElement("div");
    score.innerText = "Score = " + counter;
    score.style.fontFamily = "cursive";
    score.style.fontSize = "30px";
    score.style.margin = "20px 0px 20px 0px";
    scorecontainer.appendChild(score);

}

function timeOut(){
    const realCount = counter - 1;
    if(realCount<= 7){
        document.body.innerHTML = "";
        const alert = document.createElement("div");
        alert.innerText = "You are a Tortoise !";
        alert.style.position = "absolute";
        alert.style.fontFamily = "cursive";
        alert.style.fontSize = "40px";
        alert.style.border = "5px solid black";
        alert.style.width = "800px";
        alert.style.textAlign = "center";
        alert.style.backgroundColor = "#e6ffe6";
        alert.style.borderRadius = "30px";
        alert.style.margin = '50px 0px 50px 360px';
        document.body.appendChild(alert);

        const score = document.createElement("div")
        score.innerText = "Your score is "+ realCount;
        score.style.fontFamily = 'cursive';
        score.style.fontSize = '30px';
        score.style.color = "red";
        alert.appendChild(score);

        const imgtortoise = document.createElement("img");
        imgtortoise.src = "tortoise.png"
        alert.appendChild(imgtortoise);

        const tryagain = document.createElement("div");
        tryagain.innerText = '';
        alert.appendChild(tryagain);
        const button = document.createElement("button");
        button.innerText = 'Try Again';
        button.style.fontSize = "30px";
        button.style.fontFamily = "cursive";
        button.style.marginBottom = "20px";
        button.style.padding = "10px 20px 10px 20px";
        button.style.borderRadius = "30px";
        button.style.backgroundColor = "white";
        button.style.cursor = "pointer";
        tryagain.appendChild(button);
        button.onclick = secondpage;
    }
    else if(realCount == 8 || realCount == 9){
        document.body.innerHTML = "";
        const alert = document.createElement("div");
        alert.innerText = "You are a Rabbit !";
        alert.style.position = "absolute";
        alert.style.fontFamily = "cursive";
        alert.style.fontSize = "40px";
        alert.style.border = "5px solid black";
        alert.style.width = "800px";
        alert.style.textAlign = "center";
        alert.style.backgroundColor = "#ffe6f2";
        alert.style.borderRadius = "30px";
        alert.style.margin = '50px 0px 50px 360px';
        document.body.appendChild(alert);

        const score = document.createElement("div")
        score.innerText = "Your score is "+ realCount;
        score.style.fontFamily = 'cursive';
        score.style.fontSize = '30px';
        score.style.color = "red";
        alert.appendChild(score);

        const imgtortoise = document.createElement("img");
        imgtortoise.src = "rabbit.png"
        alert.appendChild(imgtortoise);

        const tryagain = document.createElement("div");
        tryagain.innerText = '';
        alert.appendChild(tryagain);
        const button = document.createElement("button");
        button.innerText = 'Try Again';
        button.style.fontSize = "30px";
        button.style.fontFamily = "cursive";
        button.style.marginBottom = "20px";
        button.style.padding = "10px 20px 10px 20px";
        button.style.borderRadius = "30px";
        button.style.backgroundColor = "white";
        button.style.cursor = "pointer";
        tryagain.appendChild(button);
        button.onclick = secondpage;
    }
    else if(realCount >=10){
        document.body.innerHTML = "";
        const alert = document.createElement("div");
        alert.innerText = "You are a Cheetah !";
        alert.style.position = "absolute";
        alert.style.fontFamily = "cursive";
        alert.style.fontSize = "40px";
        alert.style.border = "5px solid black";
        alert.style.width = "800px";
        alert.style.textAlign = "center";
        alert.style.backgroundColor = "#ffffe6";
        alert.style.borderRadius = "30px";
        alert.style.margin = '50px 0px 50px 360px';
        document.body.appendChild(alert);

        const score = document.createElement("div")
        score.innerText = "Your score is "+ realCount;
        score.style.fontFamily = 'cursive';
        score.style.fontSize = '30px';
        score.style.color = "red";
        alert.appendChild(score);

        const imgtortoise = document.createElement("img");
        imgtortoise.src = "cheetah.png";
        alert.appendChild(imgtortoise);

        const tryagain = document.createElement("div");
        tryagain.innerText = '';
        alert.appendChild(tryagain);
        const button = document.createElement("button");
        button.innerText = 'Try Again';
        button.style.fontSize = "30px";
        button.style.fontFamily = "cursive";
        button.style.marginBottom = "20px";
        button.style.padding = "10px 20px 10px 20px";
        button.style.borderRadius = "30px";
        button.style.backgroundColor = "white";
        button.style.cursor = "pointer";
        tryagain.appendChild(button);
        button.onclick = secondpage;
    }
    counter = 0;


}

firstpage();

