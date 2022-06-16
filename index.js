let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
countHome = 0
countGuest = 0


function addOneHome() {
    countHome += 1
    homeScore.textContent = countHome
}

function addOneGuest() {
    countGuest += 1
    guestScore.textContent = countGuest
}


function addTwoHome() {
    countHome += 2
    homeScore.textContent = countHome
}

function addTwoGuest() {
    countGuest += 2
    guestScore.textContent = countGuest
}


function addThreeHome() {
    countHome += 3
    homeScore.textContent = countHome
}

function addThreeGuest() {
    countGuest += 3
    guestScore.textContent = countGuest
}