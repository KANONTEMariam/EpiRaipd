// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-glo-modal")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    var thumb = document.getElementById("my-glo3d-preview").src
    var glo3dId = thumb.substr(thumb.lastIndexOf('/') + 1, thumb.length)
    console.log(glo3dId)
    var node = document.createElement('iframe')
    node.setAttribute("id", "my-glo3d-iframe")
    node.setAttribute("width", Math.floor(window.innerWidth / 2))
    node.setAttribute("height", Math.floor(window.innerHeight / 2))
    node.setAttribute("frameborder", "0")
    node.setAttribute("scrolling", "no")
    node.setAttribute("src", "https://glo3d.net/iFrame/" + glo3dId + "?autoLoad=true&amp;autoRotate=true")
    node.style.width = "100%"
    node.style.background = "url(https://360spin.glo3d.net/loader.gif) center center no-repeat"
    node.style.margin = "0 auto"
    var targetDiv = document.getElementById("myModal").getElementsByClassName("glo3d-modal-content")[0]
    console.log(targetDiv.contains(document.getElementById("my-glo3d-iframe")))

    if (!targetDiv.contains(document.getElementById("my-glo3d-iframe"))) {
        targetDiv.appendChild(node)
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}