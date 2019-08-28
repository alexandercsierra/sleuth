function writeText() {
    var words = document.getElementById("text").value;
    document.getElementById("guestList").innerHTML += (words + " ");
}

//add guest
const addGuest = document.forms['onlyForm'];
addGuest.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addGuest.querySelector('input[type="text"]').value;

    //create elements
    const newPara = document.createElement("p");
    const guestList = document.getElementById("guestList");
    guestList.appendChild(newPara);

    //add content
    newPara.textContent = value;
});