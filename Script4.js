let produit = prompt("Nom du produit :");
let prixUnitaire = Number(prompt("Prix unitaire du produit en TND :"));
let quantite = Number(prompt("Quantité commandée :"));

let totalAvantRemise = prixUnitaire * quantite;
let remise = 0;

if (totalAvantRemise < 100) {
  remise = 0;
} else if (totalAvantRemise >= 100 && totalAvantRemise < 200) {
  remise = 10;
} else {
  remise = 20;
}

let montantRemise = (totalAvantRemise * remise) / 100;
let totalApresRemise = totalAvantRemise - montantRemise;
let fraisLivraison = 0;

if (totalApresRemise < 150) {
  fraisLivraison = 7;
}

let montantFinal = totalApresRemise + fraisLivraison;

console.log("Produit : " + produit);
console.log("Prix unitaire : " + prixUnitaire + " TND");
console.log("Quantité : " + quantite);
console.log("Total avant remise : " + totalAvantRemise + " TND");
console.log("Remise appliquée : " + remise + "%");
console.log("Montant de la remise : " + montantRemise + " TND");
console.log("Total à payer : " + totalApresRemise + " TND");
console.log("Frais de livraison : " + fraisLivraison + " TND");
console.log("Montant final : " + montantFinal + " TND");
