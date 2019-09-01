var guestArray=[];
var roomArray=['Lounge', 'Dining Room', 'Kitchen', 'Ballroom', 'Conservatory', 'Billiard Room', 'Library', 'Study', 'Hall'];
var weapons = ["candlestick", "wrench", "lead pipe", "revolver", "rope", "knife"];

//randomly choosing a murder victim
function whoIsDead() {
    return guestArray[Math.floor(Math.random() * Math.floor(7))];
}

//randomly choosing a weapon
function printWeapon(){
  return weapons[Math.floor(Math.random() * Math.floor(6))];
}

//randomly choosing a room
function printRoom() {
  return rooms[Math.floor(Math.random() * Math.floor(9))];
}

var clickCount = 0;

//add guest
const addGuest = document.forms['addGuest'];
addGuest.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addGuest.querySelector('input[type="text"]').value;

    //create elements
    const newPara = document.createElement("p");
    const guestList = document.getElementById("guestList");
    guestList.appendChild(newPara);

    
    if (guestArray[6] != null){
        guestArray.slice(0, 7);

    } else if (guestArray[5] != null){
        guestArray.push(value);
        newPara.textContent = "The final guest list is: " + guestArray;

        //done adding guests button to start game
        var doneGuest = document.querySelector("#doneGuest");
        doneGuest.addEventListener("click", function(e){
            var openingStatement = document.getElementById("opening");
            var anotherParagraph = document.createElement("p");
            openingStatement.appendChild(anotherParagraph);
            var murderedGuest = whoIsDead();
            //filters out dead guest so they aren't in play
            var newGuestArray = guestArray.filter(f => f !== murderedGuest);
            anotherParagraph.textContent = "You stand at the estate of " + murderedGuest + ". You have your choice of rooms to visit. Where shall you head first?";


            //irs stans for initial room selection
            var irs = document.createElement("form");
            //irs.setAttribute('method',"post");
            //irs.setAttribute('action',"submit.php");
            irs.setAttribute('id', "irs");

            var i = document.createElement("input"); //input element, text
            i.setAttribute('type',"text");
            //i.setAttribute('onfocus', "this.value=' '");
            //i.setAttribute('name',"username");

            var s = document.createElement("input"); //input element, Submit button
            s.setAttribute('type', "submit");
            s.setAttribute('id', "firstRoom");
            s.setAttribute('class', "btn");
            s.setAttribute('value', "Continue");


            irs.appendChild(i);
            //irs.appendChild(s);
            anotherParagraph.appendChild(irs);
            anotherParagraph.appendChild(s);

            //continue button works only once
            clickCount++;
            clickCount++ >= 1 ? document.getElementById('doneGuest').disabled = true : document.getElementById('doneGuest').disabled = false;

            //assigning the murder weapon to a static variable
            var murderWeapon = printWeapon();

            const firstRoom = document.forms['irs'];
            firstRoom.addEventListener("submit", function(e){
                e.preventDefault();
                const value = irs.querySelector('input[type="text"]').value;
                for (i=0; i<roomArray.length; i++){
                    if (value == roomArray[i]){
                        anotherParagraph.textContent = "You have entered the " + value + ". This room contains ";
                    } else {
                        document.createElement("p").textContent = "Please enter a valid room. Your choices are the following: " + roomArray;
                    }
                }

            });


        });



        
    } else {
        guestArray.push(value);
        newPara.textContent = "The current guest list includes: " + guestArray;
    }


});
























/*//randomly chooses one guest to be murdered
function whoIsDead() {
    return guestArray[Math.floor(Math.random() * Math.floor(7))];
}

//assigns mudered guest to a static variable
const murderedGuest = whoIsDead();

//filters out dead guest so they aren't in play
var newGuestList = guestArray.filter(e => e !== murderedGuest);

//randomly chooses murderer from new guest list
function whoIsMurderer() {
    return newGuestList[Math.floor(Math.random() * Math.floor(6))];
}

//assigns murderer to a variable
var murderer = whoIsMurderer();*/

