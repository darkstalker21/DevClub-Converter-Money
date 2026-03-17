const convertButton = document.querySelector(".convert-button");
const currencySelectConvert = document.querySelector(".currency-select-convert");
const currencySelectConverted = document.querySelector(".currency-select-converted");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector("#currency-to-convert"); //Valor em Real
  const currencyValueConverted = document.querySelector("#currency-converted"); //Outras moedas

  // console.log(currencySelect.value);
  const dolarToday = 5.19;
  const euroToday = 5.99;
  const libraToday = 6.94;

  if (currencySelectConverted.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelectConverted.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if(currencySelectConverted.value == "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(inputCurrencyValue / libraToday);

  }


  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);


}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelectConverted.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dolar.png"
  }

  if (currencySelectConverted.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if(currencySelectConverted.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra 1.png"
  }

  convertValues()
}

currencySelectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);
