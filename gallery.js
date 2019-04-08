maxThumbs = 6;

window.onload = function() {
  firebase.database().ref('perspectives').orderByChild('timestamp').limitToLast(maxThumbs).on('child_added', function(data) {
    if ($("#gallery div div div").length >= maxThumbs) {
      $("#gallery div div div:last-child").remove();
    }
    $("#gallery div div.span12").prepend("<div style='display:inline-block; width: 200px; height: 200px; background-color: " + data.val().color + "'>Color me " + data.val().title + "<small>by " + data.val().creator + "</small></div>");
  });
};
