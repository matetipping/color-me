function determinePerspective() {
  var perspID = "";
  var currentURL = window.location.href;
  if (currentURL.includes("?id=")) {
    perspID = currentURL.split("?id=")[1];
  }
  return perspID;
}

function loadPerspective(perspID) {
    firebase.database().ref('perspectives/' + perspID).once('value').then(function(snapshot) {
        var title = snapshot.child('title').val();
        var creator = snapshot.child('creator').val();
        var color = snapshot.child('color').val();
        alert(perspID + ": " + title + " by " + creator + ", theme: " + color);
    });
}

window.onload = function() {
  var perspID = determinePerspective();
  loadPerspective(perspID);
};
