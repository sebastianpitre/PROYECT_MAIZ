function calcularHerramientas() {
    const hectareas = parseFloat(document.getElementById("hectareas").value);
    const hectarea = document.getElementById("hectareas").value;
    const condicion = document.getElementById("condicion").value;
    const cotizar = document.getElementById("cotizar").value;

    const tipo_transaccion =0;
    
    // Crear un objeto FormData y agregar el dato
    const formData = new FormData();
    formData.append('hectareas', hectarea);
    formData.append('condicion', condicion);
    formData.append('tipo_transaccion', tipo_transaccion);
    formData.append('cotizar', cotizar);

    // Realizar una petición Fetch para enviar los datos al servidor

    fetch('../assets/php/guardar.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // respuesta_valor_maiz del servidor (opcional)
    })
    .catch(error => {
        console.error('Error:', error);
    });



    const herramientas = calcularHerramientasPorHectarea(hectareas);
    mostrarResultado(herramientas);
}

function calcularHerramientasPorHectarea(hectareas) {
    const palasPorHectarea = 10;
    const baldesPorHectarea = 8;
    const palinPorHectarea = 8;
    const bolsasPorHectarea = 12;
    const kgSemillasPorHectarea = 20;
    const personalPorHectarea =4;

    const palasNecesarias = palasPorHectarea * hectareas / 10000;
    const baldesNecesarios = baldesPorHectarea * hectareas / 10000;
    const palinNecesarios = palinPorHectarea * hectareas / 10000;
    const bolsasNecesarias = bolsasPorHectarea * hectareas / 10000;
    const kgSemillasNecesarias = kgSemillasPorHectarea * hectareas /10000;
    const personalNecesarios = personalPorHectarea * hectareas /10000;

    return [
        { nombre: 'Personal', cantidad: personalNecesarios, imagen: '../assets/img/herramientas/006-agricultor.png', medida: ' pers' },
        { nombre: 'Baldes', cantidad: baldesNecesarios, imagen: '../assets/img/herramientas/balde.png', medida: ' und' },
        { nombre: 'Palín', cantidad: palinNecesarios, imagen: '../assets/img/herramientas/001-pala.png', medida: ' und' },
        { nombre: 'Bolsas', cantidad: bolsasNecesarias, imagen: '../assets/img/herramientas/bolsas.png', medida: ' und' },
        { nombre: 'Palas', cantidad: palasNecesarias, imagen: '../assets/img/herramientas/001-pala.png', medida: ' und' },
        { nombre: 'Semillas', cantidad: kgSemillasNecesarias, imagen: '../assets/img/herramientas/maiz.png', medida: ' kg' },
        
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


function sumar() {
// const cotizar = document.getElementById("cotizar").value;
//console.log(cotizar);
// Crear un objeto FormData y agregar el dato
//const formData = new FormData();
//formData.append('cotizar', cotizar);

var num1 = parseInt(document.getElementById("cotizar").value) || 0;
var num2 = parseInt(document.getElementById("totalAmount").innerText) || 0;

var resultadot = num1 + num2;

document.getElementById("resultadot").innerHTML = "$ " + (resultadot).toFixed(2);
/*  fetch('../assets/php/guardar.php', {
    method: 'POST',
    body: formData
})
.then(response => response.text())
.then(data => {
    console.log(data); // respuesta_valor_maiz del servidor (opcional)
})
.catch(error => {
    console.error('Error:', error);
});*/
}
