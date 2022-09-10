const d = document
$selectPrimary = d.getElementById("select-primary");
$selectSecondary = d.getElementById("select-secondary");

function loadMakes() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '18b0f3c3ddmsh476e3145da49a75p17a59fjsn4e6650baf93d',
            'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
        }
    };

    fetch('https://motorcycle-specs-database.p.rapidapi.com/make', options)

        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            let options = `<option value="">Elige una marca</option>`;
            json.forEach(({ id, name }) => options += `<option value="${name}">${name}</option>`);
            $selectPrimary.innerHTML = options;
        })
        .catch(err => {
            console.log(err);
        });

}

function loadModel(make) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '18b0f3c3ddmsh476e3145da49a75p17a59fjsn4e6650baf93d',
            'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
        }
    };

    fetch(`https://motorcycle-specs-database.p.rapidapi.com/model/make-name/${make}`, options)
        .then(response => response.json())
        .then(json => {
            let options = `<option value="">Elige un modelo</option>`;
            json.forEach(({ id, name }) => options += `<option value="${name}">${name}</option>`);
            $selectSecondary.innerHTML = options;
        })
        .catch(err => {
            console.log(err);
        });
}

d.addEventListener("DOMContentLoaded", loadMakes)

$selectPrimary.addEventListener("change", e => loadModel(e.target.value))

function loadData(make, model) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '18b0f3c3ddmsh476e3145da49a75p17a59fjsn4e6650baf93d',
            'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
        }
    };
    
    fetch(`https://motorcycle-specs-database.p.rapidapi.com/make/${make}/model/${model}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

let buttonSpecs = document.getElementById("buttonSpecs");
buttonSpecs.addEventListener('click', loadData);