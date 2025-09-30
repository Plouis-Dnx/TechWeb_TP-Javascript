document.querySelector('a').setAttribute('href','https://www.wikipedia.fr');

document.querySelector('button').addEventListener('click', e => {
    e.preventDefault(); // Empêche la page de se recharger automatiquement

    const text = document.querySelector('input[type="text"]');
    if(text.value !== 'Oui' || text.value !== 'Non'){
        text.setAttribute('placeholder', 'Il faut mettre Oui ou Non');
    }

    // 3. Pour aller plus loin : date 
    console.log(document.querySelector('input[type="date"]').value);
});

document.getElementById('label_c1').innerText = "HP";
document.getElementById('label_c2').innerText = "Casque";
document.getElementById('label_c3').innerText = "Bluetooth";


document.querySelectorAll('input[type="radio"]').forEach(e => {
    e.addEventListener('click', () => {
        if(e.checked) document.getElementById('label_range').innerText = "Volume " + e.nextSibling.innerText;
    });
});

const range = document.getElementById('range');
range.setAttribute('max', 11);
range.value = 0; // Valeur par défaut = 0
range.addEventListener('input', e => {
    document.getElementById('range_value').innerText = document.querySelector('input[type="range"]').value;
});

document.querySelector('label[for="checkbox"]').innerText = "Mute";
document.getElementById('checkbox').addEventListener('change', e => {
    range.disabled = e.target.checked;
});

const image = document.createElement('img');
image.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg");
image.style.width = "200px";
document.getElementById('liens_et_images').appendChild(image);

// Menu
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div').forEach( (div, index) => {
        div.style.display = "none";
        
        const titres = ["Liens et Images", "Des Éléments", "Barres de Progression"];
        const text = document.createElement('label');
        text.innerHTML = "Afficher "+titres[index]+"<br>";

        const checked = document.createElement('input');
        checked.type = "checkbox"; checked.id = index; checked.setAttribute('onclick', 'afficher()');

        document.body.appendChild(checked);
        document.body.appendChild(text);
    });
});

function afficher() {
    const divs = ['liens_et_images', 'éléments', 'barres_de_progression'];
    const checkbox = document.activeElement; // Récupère l'élément cliqué

    if(checkbox.checked) document.getElementById(divs[checkbox.id]).style.display = "block";
    else document.getElementById(divs[checkbox.id]).style.display = "none"
}

//3. Pour aller plus loin : barres de progression
setInterval(() => {
    document.querySelectorAll('progress').forEach(barre => {
        barre.max = 100;
        barre.value = (barre.value + 5) % 100; // Retour à 0 lorsque la barre atteint 100%
    })
}, 1000);