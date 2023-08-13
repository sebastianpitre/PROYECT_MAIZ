// Ocultar y mostrar contenedor de preguntas dependiendo de la accion
function changeForm() {
    var transactionType = document.getElementById("transactionType").value; //id del select
    
    var alquilerForm = document.getElementById("alquilerForm");//id del primer contenedor
    var comprarForm = document.getElementById("comprarForm");//id del segundo contenedor
    
    if (transactionType === "alquilar") { //se compara con el value seleccionado
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "comprar") { //se compara con el value seleccionado
    alquilerForm.style.display = "none";
    comprarForm.style.display = "block";
    }

    else if (transactionType === "alquilar_preparacion") { //se compara con el value seleccionado
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "comprar_preparacion") { //se compara con el value seleccionado
    alquilerForm.style.display = "none";
    comprarForm.style.display = "block";
    }

    else if (transactionType === "alquilar_fertilizacion") {
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "comprar_fertilizacion") {
    alquilerForm.style.display = "none";
    comprarForm.style.display = "block";
    }

    else if (transactionType === "alquilar_cosecha") {
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "comprar_cosecha") {
    alquilerForm.style.display = "none";
    comprarForm.style.display = "block";
    }

    else if (transactionType === "alquilar_pos_cosecha") {
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "comprar_pos_cosecha") {
    alquilerForm.style.display = "none";
    comprarForm.style.display = "block";
    }

    else if (transactionType === "alquilar_comercializar") {
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "comprar_comercializar") {
    alquilerForm.style.display = "none";
    comprarForm.style.display = "block";
    } 
        

    // oculta cuando no hay una seleccion
    else if (transactionType === "selecciona") {
    alquilerForm.style.display = "none";
    comprarForm.style.display = "none";
    }
}



function resetForm(transactionType) {
    if (transactionType === "alquilar") {
    document.getElementById("productNameAlquiler").value = "";
    document.getElementById("quantityAlquiler").value = "";
    document.getElementById("pricePerUnitAlquiler").value = "";
    document.getElementById("rentalTime").value = "";
    } else if (transactionType === "comprar") {
    document.getElementById("productNameComprar").value = "";
    document.getElementById("quantityComprar").value = "";
    document.getElementById("pricePerUnitComprar").value = "";
    }
}


function mostrar_nav2() {
    var iframe = document.getElementById("mostrar_navbar");
    
    iframe.src = "../pages/navbar.html"; // carga la página HTML en el iframe

    console.log('HOLAAAAA');
  }
  mostrar_nav2();



function mostrar_nav() {
  var navarScript = document.createElement('script');
  navarScript.src = '../pages/navbar.html';
  document.head.appendChild(navarScript);
  
  // Creando el elemento navar
  var navarElement = document.createElement('navar');
  
  // Agregando el elemento al HTML
  document.body.appendChild(navarElement);
}
mostrar_nav();
