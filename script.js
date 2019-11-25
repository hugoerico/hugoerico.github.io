function aparecer() {
    if (document.getElementById("nav").style.display == "block") { document.getElementById("nav").style.display = "none"; } else { document.getElementById("nav").style.display = "block"; }

    if (document.getElementById("article").style.display == "none") { document.getElementById("article").style.display = "block"; } else { document.getElementById("article").style.display = "none"; }

    if (document.getElementById("footer").style.position == "fixed") { document.getElementById("footer").style.position = "relative"; } else { document.getElementById("footer").style.position = "fixed"; }

    if (document.getElementById("img_menu").style.display == "none") { document.getElementById("img_menu").style.display = "block"; } else { document.getElementById("img_menu").style.display = "none"; }

    if (document.getElementById("img_menu1").style.display == "block") { document.getElementById("img_menu1").style.display = "none"; } else { document.getElementById("img_menu1").style.display = "block"; }
}