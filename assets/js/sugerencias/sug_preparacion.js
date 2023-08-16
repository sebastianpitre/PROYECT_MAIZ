function calcularHerramientas() {
    const hectareas = parseFloat(document.getElementById("hectareas").value);

    const herramientas = calcularHerramientasPorHectarea(hectareas);
    mostrarResultado(herramientas);
}

function calcularHerramientasPorHectarea(hectareas) {
    const palasPorHectarea = 10;
    const baldesPorHectarea = 8;
    const palinPorHectarea = 8;
    const bolsasPorHectarea = 12;
    const personalPorHectarea =4;
    const tractorPorHectarea =1;

    const palasNecesarias = palasPorHectarea * hectareas / 10000;
    const baldesNecesarios = baldesPorHectarea * hectareas / 10000;
    const palinNecesarios = palinPorHectarea * hectareas / 10000;
    const bolsasNecesarias = bolsasPorHectarea * hectareas / 10000;
    const personalNecesarios = personalPorHectarea * hectareas /10000;

    return [
        { nombre: 'Tractor', cantidad: tractorPorHectarea, imagen: '../assets/img/herramientas/005-tractor.png', medida: ' und' },
        { nombre: 'Personal', cantidad: personalNecesarios, imagen: '../assets/img/herramientas/006-agricultor.png', medida: ' pers' },
        { nombre: 'Baldes', cantidad: baldesNecesarios, imagen: '../assets/img/herramientas/balde.png', medida: ' und' },
        { nombre: 'Palín', cantidad: palinNecesarios, imagen: '../assets/img/herramientas/001-pala.png', medida: ' und' },
        { nombre: 'Bolsas', cantidad: bolsasNecesarias, imagen: '../assets/img/herramientas/bolsas.png', medida: ' und' },
        { nombre: 'Palas', cantidad: palasNecesarias, imagen: '../assets/img/herramientas/001-pala.png', medida: ' und' },
        
    ];
}

function mostrarResultado(herramientas) {
    const listaHerramientasDiv = document.getElementById("herramientas-lista");
    listaHerramientasDiv.innerHTML = '';

    herramientas.forEach(herramienta => {
        const herramientaDiv = document.createElement("div");
        herramientaDiv.classList.add("col", "mt-3");

        const card = document.createElement("div");
        card.classList.add("card", "p-2", "blur", "align-items-center");

        const cardBody = document.createElement("div");
        card.classList.add("card");

        const author = document.createElement("div");
        author.classList.add("author", "align-items-center");

        const imagen = document.createElement("img");
        imagen.src = herramienta.imagen;
        imagen.alt = herramienta.nombre;
        imagen.classList.add("avatar1", "herramienta-imagen");

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("name", "ps-2");

        const nombreCantidad = document.createElement("span");
        nombreCantidad.textContent = herramienta.nombre + ': ' + herramienta.cantidad + herramienta.medida;
        nombreCantidad.classList.add("text-dark", "herramienta-item");

        nameDiv.appendChild(nombreCantidad);
        author.appendChild(imagen);
        author.appendChild(nameDiv);
        cardBody.appendChild(author);
        card.appendChild(cardBody);
        herramientaDiv.appendChild(card);
        listaHerramientasDiv.appendChild(herramientaDiv);
    });
}
// Calcular herramientas al cargar la página con 2 hectáreas por defecto
calcularHerramientas()