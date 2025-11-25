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

        }, 4000); // 4-second delay

    });
}

function run() {

    if (age.value === "" || nameField.value === "") {
        alert("Please fill all fields.");
        return;
    }

    const userAge = Number(age.value);
    const userName = nameField.value;

    checkAge(userAge, userName)
        .then(message => alert(message))
        .catch(error => alert(error));
}

btn.addEventListener("click", run);
