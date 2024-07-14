let pronoun = ["the", "our"];
let adjetivo = ["great", "big"];
let sustantivo = ["jogg", "racoon"];

pronoun.forEach((articulo) => {
  adjetivo.forEach((adje) => {
    sustantivo.forEach((sustan) => {
      console.log(articulo + adje + sustan + ".com");
    });
  });
});

let nombre = ["the", "our"];
let apellido = ["excelent", "flor"];
let ciudad = ["profesor", "español"];

nombre.forEach((nom) => {
  apellido.forEach((apell) => {
    ciudad.forEach((ciud) => {
      console.log(nom + apell + ciud + ".es");
    });
  });
});
