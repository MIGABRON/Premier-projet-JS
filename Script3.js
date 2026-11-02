let nom = prompt("veuillez entrez votre nom SVP :");
let note = Number(prompt("veuillez entrez votre note SVP :"));
if (isNaN(note) || note < 0 || note > 20) {
  alert("Note invalide ! Veuillez entrer une note entre 0 et 20.");
}

if (note < 10) {
  alert("Bonjour " + nom + " !");
  alert("Échec ! Votre note est " + note + "/20.");
} else if (note >= 10 && note <= 12) {
  alert("Bonjour " + nom + " !");
  alert("Moyen ! Votre note est " + note + "/20.");
} else if (note > 12 && note <= 14) {
  alert("Bonjour " + nom + " !");
  alert("Assez bien ! Votre note est " + note + "/20.");
} else if (note > 14 && note <= 16) {
  alert("Bonjour " + nom + " !");
  alert("Bien ! Votre note est " + note + "/20.");
} else if (note > 16 && note <= 20) {
  alert("Bonjour " + nom + " !");
  alert("Très bien ! Votre note est " + note + "/20.");
} else {
  alert("Note invalide !");
}

alert("Étudiante " + nom + " ! Votre note est " + note + "/20. Félicitations " + nom + " !");

