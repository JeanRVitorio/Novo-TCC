$(document).ready(function() {

    // Simula uma resposta de requisição GET
    var texto =[
        {
            imagem: "./Imagem/ftfem.jpg"
            titulo: "Texto 01",
            comentario: "modelo tal"
        },
        {
            imagem: "./Imagem/ftfem.jpg"
            titulo: "Texto 02",
            comentario: "modelo tal"
        },
        {
            imagem: "./Imagem/ftfem.jpg"
            titulo: "Texto 03",
            comentario: "modelo tal"
        },
        {
            imagem: "./Imagem/ftfem.jpg"
            titulo: "Texto 04",
            comentario: "modelo tal"
        }
    ];

    // Cria os elementos dinamicamente
    for(i = 0; i < texto.length; i++){

       var card = $(
           '<div class="card">' +
                '<div class="imagem">' +
                    '<img>' + texto[i].imagem + '</img>' +
                '</div>' +
                '<div class="title">' +
                    '<h3>' + texto[i].titulo + '</h3>' +
                '</div>' +
                '<div class="body">' +
                    '<p>' + texto[i].comentario + '</p>' +
                '</div>' +
            '</div>');

        // Atribui os elementos html na div dos cards
        $(".card-wrapper").append(card);
    }

}); 





/*
card
card_img
card-title
card-text
card_tam
card_valor */