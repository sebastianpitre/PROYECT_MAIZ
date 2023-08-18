function closed() {
    $("#modalContAnalisis").fadeOut();
    $("#modalFrameAnalisis").attr("src", "");
    $("#modalContPreparacion").fadeOut();
    $("#modalFramePreparacion").attr("src", "");
};

// separador de modal
$(document).ready(function() {
    $("#openGuiaAnalisis").click(function() {
    $("#modalContAnalisis").fadeIn();
    $("#modalFrameAnalisis").attr("src", "../instructivos/cartilla.html#analisis");
});

// separador de modal
    $("#openGuiaPreparacion").click(function() {
    $("#modalContPreparacion").fadeIn();
    $("#modalFramePreparacion").attr("src", "about2.html#modal2");
});
});
