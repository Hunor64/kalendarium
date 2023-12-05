date = new Date();
let altMeglepetes = ['🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕','🖕'];

function createKalendarium(inputNum) {
    let main = document.getElementById("main");
    for (let index = 1; index < inputNum; index++) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        if (index > date.getDate()) {
            div.id = "greyNap";
        } 
        else{
            div.id = "nap";
        }
        div.className = index;
        div.onclick = function () { openKalendarium(index); };
        p.innerHTML = index;
        p.id = "p" + index;
        div.appendChild(p);
        main.appendChild(div);
    }
}
function createPadding(inputNum) {
    let main = document.getElementById("main");
    for (let index = 1; index < inputNum; index++) {
        let div = document.createElement("div");
        div.id = "padder";
        div.className = "padder" + index;
        main.appendChild(div);
    }
}
function openKalendarium(inputDay) {
    console.log(inputDay)
    let divElement = document.getElementsByClassName(inputDay)[0];
    let pElement = document.getElementById("p" + inputDay);
    if (pElement.innerHTML == inputDay) {
        
        if (inputDay > date.getDate()) {
            alert("AMBATOBLOU")
        } 
        else {
            pElement.innerHTML = altMeglepetes[inputDay-1];
            divElement.id = "redNap";
        }
    }
    else{
        pElement.innerHTML = inputDay;
        divElement.id = "nap";

    }
}

createPadding(5);
createKalendarium(25);
