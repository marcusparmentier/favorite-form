$(function() {
  $("form#formRay").submit(function(event) {
    var colorf = $("input#colorInput").val();
    var namef = $("input#nameInput").val();
    var animalf = $("input#animalInput").val();
    var numberf = $("input#numberInput").val();
    var arrayf = [colorf, namef, animalf, numberf];

    $(".favArray").text(arrayf);

    $(".favColor").text(colorf);
    $(".favName").text(namef);
    $(".favAnimal").text(animalf);
    $(".favNumber").text(numberf);

    $("#favList").show();

    event.preventDefault();

  });
});
