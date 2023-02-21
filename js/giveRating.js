document.getElementById("star1").addEventListener("mouseout", mouseout);
document.getElementById("star2").addEventListener("mouseout", mouseout);
document.getElementById("star3").addEventListener("mouseout", mouseout);
document.getElementById("star4").addEventListener("mouseout", mouseout);
document.getElementById("star5").addEventListener("mouseout", mouseout);


document.getElementById("star1").addEventListener("click", click);
document.getElementById("star2").addEventListener("click", click);
document.getElementById("star3").addEventListener("click", click);
document.getElementById("star4").addEventListener("click", click);
document.getElementById("star5").addEventListener("click", click);

document.getElementById("star1").addEventListener("dblclick", dblclick);
document.getElementById("star2").addEventListener("dblclick", dblclick);
document.getElementById("star3").addEventListener("dblclick", dblclick);
document.getElementById("star4").addEventListener("dblclick", dblclick);
document.getElementById("star5").addEventListener("dblclick", dblclick);

document.getElementById("star1").addEventListener("mouseover", mouseover);
document.getElementById("star2").addEventListener("mouseover", mouseover);
document.getElementById("star3").addEventListener("mouseover", mouseover);
document.getElementById("star4").addEventListener("mouseover", mouseover);
document.getElementById("star5").addEventListener("mouseover", mouseover);

function mouseover() {
    let p = document.images;
    for(let i = 0 ; i < this.id.substr(4) ; i++) {
        p[i].src = "/images/changstar.gif";
        document.getElementById("cost").innerHTML=`評分為...${i+1}`;
    }
}

function mouseout() {
    let p = document.images;
    for(let i = 0 ; i < this.id.substr(4) ; i++) {
        p[i].src = "/images/star.gif";
        document.getElementById("cost").innerHTML="";
    }
}


function click() {
    let p = document.images;
    let pl = p.length;
    for(let i = 0 ; i < this.id.substr(4) ; i++) {
        console.log(this.id);
        p[i].src = "/images/changstar.gif";
    }
    
    for(let i =0 ; i < pl ; i++) {
        p[i].removeEventListener("mouseout", mouseout);
        p[i].removeEventListener("mouseover", mouseover);
        p[i].removeEventListener("click", click);
    }
}

function dblclick() {

    let p = document.images;
    console.log(p);
    for(let i = 0 ; i < p.length ; i++) {
        p[i].src = "/images/star.gif";
        p[i].addEventListener("mouseout", mouseout);
        p[i].addEventListener("mouseover", mouseover);
        p[i].addEventListener("click", click);
    }
}