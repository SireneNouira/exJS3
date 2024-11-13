//EXERCICE 1

// let result = "";  // Déclarer la variable result en dehors de la boucle

// for (let i = 1; i <= 5; i++) {  // On commence à i = 1 pour avoir une étoile dès la première ligne
//     result = "*".repeat(i);  // Répéter l'étoile i fois
//     console.log(result);  // Afficher chaque ligne dans la console
// }

//EXERCICE 2

// let hero = ["Spiderman", "Captain America", "Wolverine", "Superman"];

// hero.forEach(function (element) {
//   console.log("Je suis fan de " + element);
// });

//EXERCICE 3
// let compteur = 10;  // Initialiser le compteur à 10

// while (compteur >= 0) {  // Tant que le compteur est supérieur ou égal à 0
//     console.log(compteur);  // Afficher le compteur actuel
//     compteur--;  // Décrémenter le compteur de 1
// }

// console.log("Décollage !");

//EXERCICE 4

// let nomAmis = ["sirene", "sirene", "sirene", "sirene", "sirene"];

// for (let i = 0; i < nomAmis.length; i++) {
//     let repetitions = i + 1;  // Le nombre de répétitions est égal à la position + 1
//     let count = 0;  // Initialiser un compteur pour la boucle while

//     while (count < repetitions) {
//       console.log(nomAmis[i]);  // Afficher le nom de l'ami
//       count++;  // Incrémenter le compteur pour avancer dans la boucle
//     }
//   }

//EXERCICE 5.1

// let nombre;

// do {
//     nombre = parseInt(prompt("Veuillez entrer un nombre entre 1 et 3 :"), 10);
// } while (nombre < 1 || nombre > 3);

// alert("Merci ! Vous avez saisi : " + nombre);

//EXERCICE 5.2

// let nombre;
// do {
//   nombre = parseInt(prompt("un nombre entre 10 ET 20"), 10);
//   if (nombre < 10) {
//     alert("Plus grand");
//   } else if (nombre > 20) {
//     alert("Plus petit");
//   }
// } while (nombre < 10 || nombre > 20);
// alert("merci vous avez saison " + nombre);

//EXERCICE 5.3

// let i = 1;  // Initialiser un compteur

// while (i <= 10) {
//     console.log(nombreDepart + i);
//     i++;  // Incrémenter i à chaque itération
// }
// let nombre = parseInt(prompt("Entrez un nombre de depart"), 10);

// for (let i = 1; i < 10; i++) {
//   console.log(nombre + i);
// }

//EXERCICE 5.4

// let nombre = parseInt(prompt("Entrez un nombre de depart"), 10);

// for (let i = 1; i < 10; i++) {
//   console.log(nombre + i);
// }

//EXERCICE 5.5

// let nombre = parseInt(prompt("Entrez un nombre de depart"), 10);
// let result = "";
// for (let i = 1; i <= 10; i++) {
//   result=nombre * i;
  
//   console.log(nombre + "X" + i + "=" + result);
// }

//EXERCICE 5.6

