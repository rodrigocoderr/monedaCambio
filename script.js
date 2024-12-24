document.getElementById('convert').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.85, MXN: 20 },
        EUR: { USD: 1.18, EUR: 1, MXN: 23.5 },
        MXN: { USD: 0.05, EUR: 0.042, MXN: 1 }
    };

    if (!amount || isNaN(amount)) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }

    const result = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});
