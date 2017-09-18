$(function() {
  $("form#formRay").submit(function(event) {
    var colorf = $("input#colorInput").val();
    var namef = $("input#nameInput").val();
    var animalf = $("input#animalInput").val();
    var numberf = $("input#numberInput").val();
    var favs = [colorf, namef, animalf, numberf];

    // var selElements = favs.slice(0, 3);

    var selElements = [namef, colorf, animalf];
    var selElements2 = [];

    selElements2.push(selElements);

    $(".favArray").text(favs);
    $(".testArray").text(selElements2);

    $(".favColor").text(colorf);
    $(".favName").text(namef);
    $(".favAnimal").text(animalf);
    $(".favNumber").text(numberf);

    $("#favList").show();

    event.preventDefault();

  });
});
