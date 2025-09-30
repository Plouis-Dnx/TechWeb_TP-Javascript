document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () =>{
        const euro = parseFloat(document.getElementById('euro').value);
        const usd = parseFloat(document.getElementById('us_dollar').value);
        const aud = parseFloat(document.getElementById('aus_dollar').value);

        // Vérifie s'il n'y a pas plusieurs valeurs saisies
        const count = [euro, usd, aud].filter(val => !isNaN(val)).length;
        if (count > 1) alert("Can't choose what to convert. Please enter only one input to convert.");

        // Conversion selon la valeur saisie
        if (!isNaN(euro)) {
            document.getElementById('euro').setAttribute('placeholder', euro.toFixed(2));
            document.getElementById('us_dollar').setAttribute('placeholder', (euro * 1.18).toFixed(2));
            document.getElementById('aus_dollar').setAttribute('placeholder', (euro * 1.79).toFixed(2));
        } else if (!isNaN(usd)) {
            document.getElementById('euro').setAttribute('placeholder', (usd * 0.85).toFixed(2));
            document.getElementById('us_dollar').setAttribute('placeholder', usd.toFixed(2));
            document.getElementById('aus_dollar').setAttribute('placeholder', (usd * 1.52).toFixed(2));
        } else if (!isNaN(aud)) {
            document.getElementById('euro').setAttribute('placeholder', (aud * 0.56).toFixed(2));
            document.getElementById('us_dollar').setAttribute('placeholder', (aud * 0.66).toFixed(2));
            document.getElementById('aus_dollar').setAttribute('placeholder', aud.toFixed(2));
        }
    });
});








