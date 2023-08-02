    function calcularHerramientas() {
        const hectareas = parseFloat(document.getElementById("hectareas").value);

        if (isNaN(hectareas) || hectareas < 0) {
            alert("La cantidad de hectáreas debe ser un número positivo.");
            return;
        }

        const herramientas = calcularHerramientasPorHectarea(hectareas);
        mostrarResultado(herramientas);
    }

    function calcularHerramientasPorHectarea(hectareas) {
        const palasPorHectarea = 10;
        const baldesPorHectarea = 2;
        const palinPorHectarea = 2;
        const bolsasPorHectarea = 6;
        const semillasPorHectarea = 20;
        const operariosPorHectarea =2;

        const palasNecesarias = palasPorHectarea * hectareas;
        const baldesNecesarios = baldesPorHectarea * hectareas;
        const palinNecesarios = palinPorHectarea * hectareas;
        const bolsasNecesarias = bolsasPorHectarea * hectareas;
        const semillasNecesarias = semillasPorHectarea * hectareas;
        const operariosNecesarios = operariosPorHectarea * hectareas;

        return [
            { nombre: 'Operarios', cantidad: operariosNecesarios, imagen: '../assets/img/herramientas/001-pala.png', medida: ' ' },
            { nombre: 'Baldes', cantidad: baldesNecesarios, imagen: '../assets/img/herramientas/balde.png', medida: ' und' },
            { nombre: 'Palín', cantidad: palinNecesarios, imagen: '../assets/img/herramientas/001-pala.png', medida: ' und' },
            { nombre: 'Bolsas', cantidad: bolsasNecesarias, imagen: '../assets/img/herramientas/bolsas.png', medida: ' und' },
            { nombre: 'Palín', cantidad: palinNecesarios, imagen: '../assets/img/herramientas/001-pala.png', medida: ' und' },
            { nombre: 'Semillas', cantidad: semillasNecesarias, imagen: '../assets/img/herramientas/maiz.png', medida: ' kg' },
            
        ];
    }

    function mostrarResultado(herramientas) {
        const listaHerramientasDiv = document.getElementById("herramientas-lista");
        listaHerramientasDiv.innerHTML = '';

        herramientas.forEach(herramienta => {
            const herramientaDiv = document.createElement("div");
            herramientaDiv.classList.add("col-lg-8", "mt-3", "ms-2");
            herramientaDiv.style.width = "16%";
            herramientaDiv.style.minWidth = "16%";
            herramientaDiv.style.maxWidth = "16%";

            const card = document.createElement("div");
            card.classList.add("card", "p-1", "blur");

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
    calcularHerramientas();