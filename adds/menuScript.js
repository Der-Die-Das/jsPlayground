var buttonWarrior = document.getElementsByClassName("warrior")[0]
var buttonMage = document.getElementsByClassName("mage")[0]
var buttonRogue = document.getElementsByClassName("rogue")[0]
var classMenu = document.getElementById("class")
var appearanceMenu = document.getElementById("appearance")

buttonWarrior.addEventListener('click', function (e) {
	classMenu.classList.remove('fadeIn');
	classMenu.classList.add("fadeOut");
	appearanceMenu.classList.add("fadeIn");
})