var brasil;
var china;
var ano = 1;

brasil = 212000000;
china = 140000000000;

while (china > brasil) {
  ano++;
  brasil *= 1.07;
  china *= 1.03;
  console.log(
    " habitantes do brasil: " + brasil + " habitantes do china: " + china
  );
}
console.log(
  "vai demorar cerca de " +
    ano +
    " anos para a população do brasil ultrapassar o china"
);
