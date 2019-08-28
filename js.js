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

    //randomly chooses one guest to be murdered
    function whoIsDead() {
    return guestArray[Math.floor(Math.random() * Math.floor(7))];
    }
  
    //assigns mudered guest to a static variable
    var murderedGuest = whoIsDead();
  
    //filters out dead guest so they aren't in play
    var newGuestList = guestArray.filter(e => e !== murderedGuest);
  
    //randomly chooses murderer from new guest list
    function whoIsMurderer() {
    return newGuestList[Math.floor(Math.random() * Math.floor(6))];
    }
  
    //assigns murderer to a variable
    var murderer = whoIsMurderer();
    
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
        anotherParagraph.textContent = "Hello thanks for continuing";
        
        //irs stans for initial room selection
        var irs = document.createElement("form");
        irs.setAttribute('method',"post");
        irs.setAttribute('action',"submit.php");

        var i = document.createElement("input"); //input element, text
        i.setAttribute('type',"text");
        i.setAttribute('name',"username");

        var s = document.createElement("input"); //input element, Submit button
        s.setAttribute('type',"submit");
        s.setAttribute('value',"Submit");

        irs.appendChild(i);
        irs.appendChild(s);
        anotherParagraph.appendChild(irs);








        });

        
    } else {
        guestArray.push(value);
        newPara.textContent = "The current guest list includes: " + guestArray;
    }

});

  

