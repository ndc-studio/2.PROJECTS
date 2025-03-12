guitarCollection.forEach(function(guitar) {
    const card = document.createElement("div");
    card.classList.add('guitar-card');

    const guitarName = document.createElement("h3");
    guitarName.textContent = `${guitar.name}`;
    guitarName.classList.add('title-card');
    card.appendChild(guitarName);

    const guitarBrand = document.createElement("h3");
    guitarBrand.textContent = `Marque: ${guitar.brand}`;
    card.appendChild(guitarBrand);

    const guitarModel = document.createElement("h4");
    guitarModel.textContent = `Modèle: ${guitar.model}`;
    card.appendChild(guitarModel);

    const guitarPickups = document.createElement('p');
    guitarPickups.innerHTML = `- Micro manche: ${guitar.pickups.neck}<br>- Micro mid: ${guitar.pickups.middle}<br>- Micro chevalet: ${guitar.pickups.bridge}`;
    guitarPickups.classList.add('pickups');
    card.appendChild(guitarPickups);

    const guitarNeck = document.createElement("p");
    guitarNeck.textContent = `Manche: ${guitar.neck}`;
    guitarNeck.classList.add('neck');
    card.appendChild(guitarNeck);

    const guitarFrets = document.createElement("p");
    guitarFrets.textContent = `Nbr de frets: ${guitar.frets}`;
    guitarFrets.classList.add('frets');
    card.appendChild(guitarFrets);
    
    const guitarBody = document.createElement("p");
    guitarBody.textContent = `Corps: ${guitar.body}`;
    guitarBody.classList.add('guitar-body');
    card.appendChild(guitarBody);

    const guitarVibrato = document.createElement("p");
    guitarVibrato.textContent = `Vibrato: ${guitar.vibrato}`;
    guitarVibrato.classList.add('vibrato');
    card.appendChild(guitarVibrato);

    const guitarPicture = document.createElement("img");
    guitarPicture.src = guitar.picture;
    guitarPicture.alt = `Photo de ${guitar.name}`;
    card.appendChild(guitarPicture);

    const container = document.getElementById("guitar-container");
    container.appendChild(card);
});