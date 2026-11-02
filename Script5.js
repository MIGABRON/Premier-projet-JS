let correctPin = "1234";
let balance = 500;

let pinSaisi = prompt("Saisir votre code PIN :");

if (pinSaisi !== correctPin) {
  alert("Erreur : code PIN incorrect.\nOpération refusée.");
} else {
  let montantRetrait = Number(prompt("Montant du retrait :"));

  if (montantRetrait <= 0) {
    alert("Erreur : le montant doit être strictement positif.");
  } else if (montantRetrait % 10 !== 0) {
    alert("Erreur : le montant doit être un multiple de 10 TND.");
  } else if (montantRetrait > balance) {
    alert("Erreur : solde insuffisant.\nSolde disponible : " + balance + " TND");
  } else {
    balance = balance - montantRetrait;
    alert("Retrait effectué avec succès !\nMontant retiré : " + montantRetrait + " TND\nNouveau solde : " + balance + " TND");
  }
}
