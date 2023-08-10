
  // cargar form Preparacion del Terreno
function changeForm_terreno() {
    var transactionType = document.getElementById("transactionType_terreno").value;
    
    var alquilerForm = document.getElementById("alquilerForm_terreno");
    var comprarForm = document.getElementById("comprarForm_terreno");
    
    if (transactionType === "alquilar_terreno") {
    alquilerForm.style.display = "block";
    comprarForm.style.display = "none";
    } else if (transactionType === "comprar_terreno") {
    alquilerForm.style.display = "none";
    comprarForm.style.display = "block";
    }
}

function addProduct() {
  var transactionType = document.getElementById("transactionType").value;
  
  var productName, quantity, pricePerUnit, additionalInfo;
  
  if (transactionType === "alquilar") {
  productName = document.getElementById("productNameAlquiler").value;
  quantity = document.getElementById("quantityAlquiler").value;
  pricePerUnit = document.getElementById("pricePerUnitAlquiler").value;
  additionalInfo = document.getElementById("rentalTime").value + " horas";
  } else if (transactionType === "comprar") {
  productName = document.getElementById("productNameComprar").value;
  quantity = document.getElementById("quantityComprar").value;
  pricePerUnit = document.getElementById("pricePerUnitComprar").value;
  additionalInfo = "Comprar";
  }
  
  var subtotal = (quantity * pricePerUnit * (transactionType === "alquilar" ? document.getElementById("rentalTime").value : 1)).toFixed(2);
  
  var table = document.getElementById("productTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);
  
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  
  cell1.innerHTML = productName;
  cell2.innerHTML = quantity;
  cell3.innerHTML = "$" + pricePerUnit;
  cell4.innerHTML = additionalInfo;
  cell5.innerHTML = "$" + subtotal;
  
  var totalAmountCell = document.getElementById("totalAmount");
  var currentTotal = parseFloat(totalAmountCell.innerText);
  totalAmountCell.innerText = (currentTotal + parseFloat(subtotal)).toFixed(2);
  
  resetForm(transactionType);
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
