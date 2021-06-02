fetch(
  "https://api.tmb.cat/v1/ibus/stops/2775?app_id=9a37b22c&app_key=71045dc36cfb4db6f76e20bb71dc70d6"
)
  .then((response) => response.json())
  .then((datos) => queParadaEs(datos));

const queParadaEs = (datos) => {
  const textos = document.querySelector(`.cuerpo`);
  textos.textContent = `El bus de la linea ${datos.data.ibus[0]["line"]} te tarda ${datos.data.ibus[0]["text-ca"]}`;
};
