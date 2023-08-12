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
    else if (transactionType === "selecciona") {
    alquilerForm.style.display = "none";
    comprarForm.style.display = "none";
    }


    else if (transactionType === "Semillas") {
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "fertilizacion") {
    alquilerForm.style.display = "none";
    comprarForm.style.display = "block";
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