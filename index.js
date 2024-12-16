let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0


function homeSum1(){
    countHome += 1
    homeScore.textContent = countHome;
}

function homeSum2(){
    countHome += 2
    homeScore.textContent = countHome;
}

function homeSum3(){
    countHome += 3
    homeScore.textContent = countHome;
}

function guestSum1(){
    countGuest += 1
    guestScore.textContent = countGuest;
}

function guestSum2(){
    countGuest += 2
    guestScore.textContent = countGuest;
}

function guestSum3(){
    countGuest += 3
    guestScore.textContent = countGuest;
}
function reset() {
    countGuest = 0
    countHome = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
}
