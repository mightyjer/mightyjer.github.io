let bio = document.querySelector("#bio");
let portfolio = document.querySelector("#portfolio");
let contact = document.querySelector("#contact");

function bioVisible() {
    bio.style.display = "";
    portfolio.style.display = "none";
    contact.style.display = "none";

    document.body.style.background = "#8293B0";
};

function portfolioVisible() {
    bio.style.display = "none";
    portfolio.style.display = "";
    contact.style.display = "none";

    document.body.style.background = "#E2BAFD";
};

function contactVisible() {
    bio.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "";

    document.body.style.background = "#DBFFBA";
};