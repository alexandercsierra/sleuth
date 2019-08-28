var guestArray=[];
//add guest
const addGuest = document.forms['addGuest'];
addGuest.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addGuest.querySelector('input[type="text"]').value;

    //create elements
    const newPara = document.createElement("p");
    const guestList = document.getElementById("guestList");
    guestList.appendChild(newPara);

    //add content
    newPara.textContent = value;
    guestArray.push(value);
    finalCount = guestArray.slice(0, 7);
    console.log(finalCount);
});