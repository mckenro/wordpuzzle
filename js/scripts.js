$(function(){
  $("form#counter").submit(function(event){
    event.preventDefault();
    var puzzleMaker1 = $("#input1").val().toLowerCase();
    var a = "a";
    var e = "e";
    var letterI = "i";
    var o = "o";
    var u = "u";
    var newArrary = [];
    var newThing = puzzleMaker1.split("");
    for (var i = 0;  i < newThing.length; i++) {
      var containerx = newThing[i];
      containerx = containerx.replace(a,"-");
      containerx = containerx.replace(e,"-");
      containerx = containerx.replace(letterI,"-");
      containerx = containerx.replace(o,"-");
      containerx = containerx.replace(u,"-");
      console.log(containerx);
     $("#outputtext").append(containerx);
    }
  });
});
