// Definimos las tasas de cambio para las monedas
const tasasDeCambio = {
    USD: { USD: 1, EUR: 0.85, MXN: 20 },
    EUR: { USD: 1.18, EUR: 1, MXN: 23.5 },
    MXN: { USD: 0.05, EUR: 0.042, MXN: 1 }
};

//USD, EUR, y MXN son claves del objeto principal 
// El valor de cada una de esas claves es otro objeto que contiene tasas de cambio con respecto a otras monedas.

// Función que realiza la conversión de moneda
document.getElementById('convertir').addEventListener('click', function() {
    // Obtenemos los valores introducidos por el usuario
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;

    // Verificamos si la cantidad ingresada es un número válido
    if (!cantidad || cantidad <= 0) {
        // alert('Por favor ingresa una cantidad válida.');
        document.getElementById('resultado').textContent = 'Por favor ingresa un monto valido.';
        return;
    }

    // Realizamos la conversión usando las tasas de cambio
    const resultado = cantidad * tasasDeCambio[monedaOrigen][monedaDestino];

    // Mostramos el resultado de la conversión
    document.getElementById('resultado').textContent = `El resultado es: ${resultado.toFixed(2)} ${monedaDestino}`;
    // Es un método que permite formatear un número para que tenga un número fijo de decimales. 
});
