
  // cargar form Preparacion del Terreno
function changeForm_preparacion() {
    var transactionType = document.getElementById("transactionType_terreno").value;
    
    var alquilerForm = document.getElementById("alquilar_preparacion");
    var comprarForm = document.getElementById("comprar_preparacion");
    
    if (transactionType === "alquilar_preparacion") {
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "comprar_preparacion") {
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
// ----------------------------------------------------------------
