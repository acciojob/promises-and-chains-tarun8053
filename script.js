//your JS code here. If required.
const age = document.getElementById("age");
const nameField = document.getElementById("name");
const btn = document.getElementById("btn");

function checkAge(ageVal, userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageVal > 18) {
                resolve(`Welcome, ${userName}. You can vote.`);
            } else {
                reject(`Oh sorry ${userName}. You aren't old enough.`);
            }
        }, 4000);
    });
}

function run(event) {
    event.preventDefault(); // form submission prevention

    if (age.value === "" || nameField.value === "") {
        alert("Please enter valid details");
        return;
    }

    checkAge(Number(age.value), nameField.value)
        .then(m => alert(m))
        .catch(e => alert(e));
}

btn.addEventListener("click", run);
