let mainApi = "https://next.json-generator.com/api/json/get/NJ-UoW2Xq";
console.log(mainApi);

function usersCards() {
    return fetch(mainApi)
        .then((resolve) => { return resolve.json(); })
}

let userDet = [];
async function printUserDet() {
    try {
        userDet = await usersCards();
        userDet.forEach(users => {
            document.getElementById("mainDiv").innerHTML +=
                `<div class="userCard">
                    <img id="userPic" src="${users.picture}" onclick="oneCard(${users.index})"><br>   
                    ${users.name.first}
                    ${users.name.last}<br>
                    email: ${users.email}<br>
                    age: ${users.age}<br>
                    phone: ${users.phone}<br>
                </div>`
        });
    }
    catch (rej) {
        document.getElementById("mainDiv").innerHTML = "Error"
    }
}
printUserDet();

function ChangeToTable() {
    document.getElementById("mainDiv").innerHTML = "";
    document.getElementById("mainDiv").innerHTML =
        `<table id="usersTable">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Picture</th>
            </tr>
        </table>`
    try {
        userDet.forEach(usersTable => {
            document.getElementById("usersTable").innerHTML +=
                `<tr>
                <td>${usersTable.name.first}</td>
                <td>${usersTable.name.last}</td>
                <td>${usersTable.email}</td>
                <td>${usersTable.age}</td>
                <td>${usersTable.phone}</td>
                <td><img src="${usersTable.picture}"</td>
            </tr>`
        });
    }
    finally {

    }
}

function addNewUser() {
    document.getElementById("mainDiv").innerHTML = "";
    document.getElementById("mainDiv").innerHTML =
        `<form id="userForm>
            <input type = "text>
            First Name:<br><input type="text"><br>
            Last Name:<br><input type="text"><br>
            Email:<br><input type="email" id="email"><br>
            Email verification:<br><input type="email" id="verEmail"><br>
            Age:<br><input type="number"><br>
            Phone:<br><input type="tel"><br>
            <button id="formBtn" onclick="sendBtn()">SEND</button>
        </form>`
}

function sendBtn() {
    let email = document.getElementById("email").value;
    let verEmail = document.getElementById("verEmail").value;
    if (email == verEmail) {
        alert("success");
    }
    else {
        alert("Your email is not the same");
    }
}

function oneCard(userIndex) {
    document.getElementById("mainDiv").innerHTML = "";
    usersCards()
        .then(userCard => {
            let userCardsArray = null;
            for (let user of userCard) {
                if (user.index == userIndex) {
                    userCardsArray = user;
                }
            }
            if (userCardsArray != null) {
                document.getElementById("mainDiv").innerHTML +=
                    `<div id="oneCardDiv">
                <img id="userPic" src="${userCardsArray.picture}"><br>   
                ${userCardsArray.name.first}
                ${userCardsArray.name.last}<br>
                email: ${userCardsArray.email}<br>
                age: ${userCardsArray.age}<br>
                phone: ${userCardsArray.phone}<br>
            </div>`
            }
        })
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
