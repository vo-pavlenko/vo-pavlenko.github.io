document.onclick = function(event) {
    var target = event.target;
    var s = document.getElementsByClassName('heading__submenu');
    if (target.className != 'heading__submenu' && s[0].style.display == 'block') {
        s[0].style.display = 'none';
    } else if (target.className == 'heading_button' && (s[0].style.display == '' || s[0].style.display == 'none')) {
        s[0].style.display = 'block';
    }

}
