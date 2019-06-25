console.log("Hello World");

function showMenu() {
    console.log("Hide Game!!!");

    document.getElementById('theMenu').style.transition = '0.5s';
    document.getElementById('theMenu').style.transitionDelay = '0.5s';
    document.getElementById('theMenu').style.height = '100vh';


    document.getElementById('gameLayout').style.transition = '0.5s';
    document.getElementById('gameLayout').style.zIndex = '-1';
    document.getElementById('gameLayout').style.opacity = '0';
}

function hideMenu() {
    console.log("Show Game!!!");

    document.getElementById('theMenu').style.transition = '0.5s';
    document.getElementById('theMenu').style.transitionDelay = '0';
    document.getElementById('theMenu').style.height = '0';


    document.getElementById('gameLayout').style.transition = '0.5s';
    document.getElementById('gameLayout').style.transitionDelay = '0.5s';
    document.getElementById('gameLayout').style.zIndex = '1';
    document.getElementById('gameLayout').style.opacity = '100';
}