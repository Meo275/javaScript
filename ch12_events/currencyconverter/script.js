function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;
  const resultDiv = document.getElementById("result");

  if (!amount || !currency) {
    resultDiv.textContent = "";
    return;
  }

  // Example fixed rates (in real apps, fetch live rates via API)
  const rates = {
    USD: 1.07, // 1 EUR ≈ 1.07 USD
    GBP: 0.86, // 1 EUR ≈ 0.86 GBP
    JPY: 157.3, // 1 EUR ≈ 157.3 JPY
  };

  const converted = (amount * rates[currency]).toFixed(2);
  resultDiv.textContent = `${amount} EUR = ${converted} ${currency}`;
}
//    onchange event listener 
function changeCountry() {
    const selected = currencySelect.value;
    const conversion = raets[selected]

// update price and symbol
priceElement.textContent = (basePrice * conversion.rate).toFixed
currencySymbol.textContent = conversion.symbol;
}
