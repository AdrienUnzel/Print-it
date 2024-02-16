const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let numero = 0;


// Définition de la fonction ChangeSlide avec un paramètre 'sens'
function ChangeSlide(sens) {
    // Incrémentation de la variable 'numero' selon la valeur de 'sens'
	numero = numero + sens;
    // Impression de la longueur du tableau 'slides' dans la console
	console.log(slides.length);
    // Si 'numero' dépasse l'index de la dernière diapositive, il est réinitialisé à 0
	if (numero > (slides.length -1))
		numero = 0;
    // Si 'numero' est négatif, il est réinitialisé pour afficher la dernière diapositive
	if (numero < 0)
		numero = slides.length -1;
    
    // Mise à jour de l'élément avec l'ID "slide" avec le chemin de l'image de la diapositive correspondante
	document.getElementById("slide").src= "./assets/images/slideshow/" + slides[numero]["image"];
	// Mise à jour de l'élément avec l'ID "content" avec la ligne de balisage associée à la diapositive actuelle
	document.getElementById("content").innerHTML = slides[numero]["tagLine"];
	
	// Ajout de la classe "active" à l'élément correspondant à la diapositive actuelle dans les indicateurs
	document.getElementsByClassName("dot")[numero].classList.add("active");
    // Boucle pour retirer la classe "active" des indicateurs qui ne correspondent pas à la diapositive actuelle
	for (i = 0; i < dots.length; i++) {
		if(i != numero)
			document.getElementsByClassName("dot")[i].classList.remove("active");
	}
}

// Définition de la fonction currentSlide avec un paramètre 'numero'
function currentSlide(numero) {
	// Mise à jour de l'élément avec l'ID "slide" avec le chemin de l'image de la diapositive correspondante
	document.getElementById("slide").src= "./assets/images/slideshow/" + slides[numero]["image"];
	// Mise à jour de l'élément avec l'ID "content" avec la ligne de balisage associée à la diapositive actuelle
	document.getElementById("content").innerHTML = slides[numero]["tagLine"];
	// Ajout de la classe "active" à l'élément correspondant à la diapositive actuelle dans les indicateurs
	document.getElementsByClassName("dot")[numero].classList.add("active");
    // Boucle pour retirer la classe "active" des indicateurs qui ne correspondent pas à la diapositive actuelle
	for (i = 0; i < dots.length; i++) {
		if(i != numero)
			document.getElementsByClassName("dot")[i].classList.remove("active");
	}
}

// Définition d'une constante 'dots' contenant tous les éléments avec la classe "dot"
const dots = document.getElementsByClassName("dot"); 
   




