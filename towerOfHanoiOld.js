var disk1 = document.createElement("div") //creating disk1
disk1.setAttribute("class", "disc1 discs");
disk1.setAttribute("id", "1");
disk1.setAttribute("value", 1);

var disk2 = document.createElement("div") //creating disk2
disk2.setAttribute("class", "disc2 discs");
disk2.setAttribute("id", "2");

var disk3 = document.createElement("div") //creating disk3
disk3.setAttribute("class", "disc3 discs");
disk3.setAttribute("id", "3");

var b1=document.getElementById("base1");
var b2=document.getElementById("base2");
var b3=document.getElementById("base3");
var tower1 = [];
var tower2 = [];
var tower3 = [];


function init() {
    document.getElementById("base1").appendChild(disk1);
    document.getElementById("base1").appendChild(disk2);
    document.getElementById("base1").appendChild(disk3);
    tower1.push(1);
    tower1.push(2);
    tower1.push(3);
}
init();
var d1=document.getElementById("1");
var d2=document.getElementById("2");
var d3=document.getElementById("3");
var selectedDisc;
// document.addEventListener('click', function (el) {
//     if (el.target.hasChildNodes()) {
//         selectedDisc = el.target.firstElementChild;
//         selectedDisc.setAttribute("style", "top:0em");
//     }
//     if (!el.target.hasChildNodes()) {
//         selectedDisc.setAttribute("style", "top:14.05em")
//         el.target.appendChild(selectedDisc);
//     }
// });
var tower;
document.addEventListener("click", function(e){
    switch (e.target.id){
        case "base1":
            tower = tower1;
            break;
        case "base2":
            tower = tower2;
            break;
        case "base3":
            tower = tower3;
            break;
        
    }
})
/* 
prevTower.pop(selectedNumber);
         towerArr.push(selectedDisk);
         movesLeft--
         movingBase.appendChild(selectedDisk);
         selectedDisk.setAttribute("style", "top:11.55em") */

function tw1(){
    var a = Math.min.apply(Math, tower1);
    if (a==1){
        d1.setAttribute("style", "top:0em");
        b2.addEventListener("click", function(e){
            if(tower2.length==0){
                b2.appendChild(d1);
                d1.setAttribute("style", "top:14.05em");
                d2.setAttribute("style", "top:12.8em");
                d3.setAttribute("style", "top:12.8em");
                tower1.splice(tower1.indexOf(1),1);
                tower2.push(1);
            }
        })
        b3.addEventListener("click", function(e){
            if(tower3.length==0){
                b3.appendChild(d1);
                d1.setAttribute("style", "top:14.05em");
                d2.setAttribute("style", "top:12.8em");
                d3.setAttribute("style", "top:12.8em");
                tower1.splice(tower1.indexOf(1),1);
                tower3.push(1);
            }
        })   
    }
}//tw1 ends
// document.getElementById("base1").addEventListener("click", )


/*  function D1B3() {
    var a = document.getElementById("disk1");
    a.setAttribute("style", "top:14.05em; left:50.8em");
}

function D1T1_Init() {
    document.getElementById("disk1").setAttribute("style", "top:0");
}
function D2T1_Init() {
    document.getElementById("disk2").setAttribute("style", "top:-1em");
}
function D3T1_Init() {
    document.getElementById("disk3").setAttribute("style", "top:-2em");
}
function D1T2_Init() {
    document.getElementById("disk1").setAttribute("style", "top:0; left:27em");
}
function D2T2_Init() {
    document.getElementById("disk2").setAttribute("style", "top:-1em; left:26em");
}
function D3T2_Init() {
    document.getElementById("disk3").setAttribute("style", "top:-2em; left:25em");
}
function D1T3_Init() {
    document.getElementById("disk1").setAttribute("style", "top:0; left:50.8em");
}
function D2T3_Init() {
    document.getElementById("disk2").setAttribute("style", "top:-1em; left:49.8em");
}
function D3T3_Init() {
    document.getElementById("disk3").setAttribute("style", "top:-2em; left:48.5em");
}
 */