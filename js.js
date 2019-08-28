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
    //guestArray.push(value);
    //var finalCount = guestArray.slice(0, 7);
    //newPara.textContent = "The guest list includes: " + finalCount;
    
    if (guestArray[6] != null){
        guestArray.slice(0, 7);
        console.log(guestArray);
    } else if (guestArray[5] != null){
        guestArray.push(value);
        newPara.textContent = "The final guest list includes: " + guestArray;
    } else {
        guestArray.push(value);
        newPara.textContent = "The current guest list includes: " + guestArray;
    }

});

