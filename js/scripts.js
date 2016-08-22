//Business Logic
function Place(location,landmarks,date,notes) {
  this.locale = location;
  this.marks = landmarks;
  this.calender = date;
  this.other = notes;
}

//User Logic
$(document).ready(function() {
  $("form#new-trip").submit(function(event) {

    event.preventDefault();

    var userLocation = $("input#new-location").val();
    var userLandmarks = $("input#new-landmarks").val();
    var userDate = $("input#new-date").val();
    var userNotes = $("input#new-notes").val();

    var newPlace = new Place(userLocation);

    $("ul#list-places").append("<li><span class='places'>" + newPlace.locale + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("");
  });
});
