function closed() {
    $("#closeModal").click(function() {
    $("#modalContAnalisis").fadeOut();
    $("#modalFrameAnalisis").attr("src", "");
    $("#closeModal2");
    $("#modalContPreparacion").fadeOut();
    $("#modalFramePreparacion").attr("src", "");
})};

// separador de modal
$(document).ready(function() {
    $("#openGuiaAnalisis").click(function() {
    $("#modalContAnalisis").fadeIn();
    $("#modalFrameAnalisis").attr("src", "../pages/pruebas/about-us.html#modal");
});

// separador de modal
    $("#openGuiaPreparacion").click(function() {
    $("#modalContPreparacion").fadeIn();
    $("#modalFramePreparacion").attr("src", "about2.html#modal2");
});
});
