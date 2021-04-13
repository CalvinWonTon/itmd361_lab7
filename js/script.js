function init(){
    // add your javascript between these two lines of code

    // initializing variables
    var eButton = document.getElementById("entrybutton");
    var eInput = document.getElementById("entryinput");
    var tOutput = document.getElementById("textoutput");

    function eventHandler(){
        alert("Calvin Ton: " + eInput.value);
        tOutput.innerHTML = eInput.value;
    }

    eButton.addEventListener("click", eventHandler); 
}
window.addEventListener('load', init);