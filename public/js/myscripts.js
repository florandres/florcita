$(document).ready(function() {

  var description = [
    "peace.jpg",
    "rock.jpg",
    "blink.jpg"
  ];

  var size = description.length
  $('.item img').each(function() {
  	var ImagenAleatoria = Math.floor(size * Math.random())
    if ($(this).hasClass("people")) {
      $(this).attr("src", description[ImagenAleatoria]); //imagenaleatoria es la variabla de la imagen que se muestra aleatoriamente
    }
  });

});
