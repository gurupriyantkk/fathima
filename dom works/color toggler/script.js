// function redcolor(){
//     // alert("here");
//     let box=document.querySelector("#id_toggle")
//     box.textContent=" red button clicked"
//     box.style.backgroundColor="red"
// }
// function greencolor(){
//     let box=document.querySelector("#id_toggle")
//     box.textContent="green button clicked"
//     box.style.backgroundColor="green"
// }
function changeColor(event){
    let btn=event.target.name;
    let box=document.querySelector("#id_toggle")
if (btn=="redbutton"){
    box.style.backgroundColor="red"
}
else if(btn=="greenbutton"){
    box.style.backgroundColor="green"
}
else if(btn=="yellowbutton"){
    box.style.backgroundColor="yellow"
}
}