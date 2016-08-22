//Business Logic
function Place(location,landmarks,date,notes) {
  this.place = location;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
}

//User Logic
$(document).ready(function() {
  $("form#new-trip").submit(function(event) {

    event.preventDefault();

    var userLocation = $("input#new-location").val();
    var userLandmarks = $("input#new-landmarks").val();
    var userDate = $("input#new-date").val();
    var userNotes = $("input#new-notes").val();

    var newPlace = new Place(userLocation, userLandmarks, userDate, userNotes);

    $("ul#list-places").append("<li><span class='places'>" + newPlace.place + "</span></li>");

    // $("input#new-location").val("");
    // $("input#new-landmarks").val("");
    // $("input#new-date").val("");
    // $("input#new-notes").val("");

    $(".places").last().click(function() {
      $("#show-place").show();
      $("show-place h2").text(newPlace.place);
      $(".landmarks").text(newPlace.landmarks);
      $(".date").text(newPlace.date);
      $(".notes").text(newPlace.notes);


  });



});

});
