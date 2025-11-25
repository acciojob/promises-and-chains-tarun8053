//your JS code here. If required.
const age = document.getElementById("age");
const nameField = document.getElementById("name");
const btn = document.getElementById("btn");

const promise = (ageVal) => {
    return new Promise((res, rej) => {
        if (ageVal > 18) {
            res("You can vote.");
        } else {
            rej("Oh sorry. You aren't old enough.");
        }
    });
};

function run() {

    // validate inside click, not outside
    if (age.value === "" || nameField.value === "") {
        alert("Please fill all fields.");
        return;
    }

    promise(Number(age.value))
        .then(msg => alert(msg))
        .catch(err => alert(err));
}

btn.addEventListener("click", run);
