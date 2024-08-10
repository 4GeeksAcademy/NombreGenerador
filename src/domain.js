let pronoun = ["the", "our"];
let adjetivo = ["great", "big"];
let sustantivo = ["jogg", "racoon", "arboles"];
let extensiones = [".com", ".net", ".us", ".io", ".es"];

pronoun.forEach((articulo) => {
  adjetivo.forEach((adje) => {
    sustantivo.forEach((sustan) => {
      extensiones.forEach((exte) => {
        const nombre = sustan;
        const extension = exte;
        const ultimasLetras = nombre.slice(-1 * (extension.length - 1));
        const extensionSimple = extension.slice(1);

        if (nombre.endsWith(extensionSimple)) {
          console.log(
            articulo +
              adje +
              nombre.slice(0, nombre.length - ultimasLetras.length) +
              extension
          );
        } else {
          console.log(articulo + adje + sustan + exte);
        }
      });
    });
  });
});
