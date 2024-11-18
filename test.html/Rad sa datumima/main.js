window.addEventListener('load',main);

function main() {
  let datumKaoTekst = '2019-05-0601:02:33Z';

  let datum = new Date(datumKaoTekst);

  console.log(datum.getFullYear);

}