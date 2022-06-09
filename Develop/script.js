var timeDisplayEl = document.querySelector("#time-display");

timeDisplayEl.textContent = moment().format("dddd, MMMM Do");

var input = [];

var saveBtn = function() {

    var saveBtn = document.getElementsByClassName("saveBtn");

    saveBtn.addEventListener("clcik", function(e) {
        console.log("The button was clicked!");
    });

    saveInput();
}

var saveInput = function() {
    localStorage.setItem("input", JSON.stringify(input));
};

var loadInput = function() {
    var savedInput = localStorage("input");

    if (!savedInput) {
        return false;
    }
    console.log("Saved inputs found!");

    savedInput = JSON.parse(savedInput);

    for (var i = 0; i < savedInput.length; i++) {
        createInputEl(savedInput[i]);
    }
};

