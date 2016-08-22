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


    $(".places").last().click(function() {
      $("#show-place").show();
      $("#show-place h3").text(newPlace.place);
      $(".landmarks").text(newPlace.landmarks);
      $(".date").text(newPlace.date);
      $(".notes").text(newPlace.notes);


  });

//to do: add form clear functionality

});

});
