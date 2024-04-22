var mobileNav = document.getElementById("mobile-nav");
var bars = document.getElementById("button-bars"); 
var primaryNav = document.getElementById("primary-nav");
var body = document.getElementsByTagName("body")[0];
var rememberY = 0;

mobileNav.onmousemove = function(event){
    mobileNav.style.backgroundPosition = event.clientX/5 + "px " + event.clientY/5 + "px";
    
}

mobileNav.onclick = function() {
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
        body.style.height = "auto";
        body.style.overflow = "scroll";
        primaryNav.style.position = "fixed"; 
        window.scrollTo(0, rememberY - 5);
    } else {
        mobileNav.style.display = "flex";
        body.style.height = "100vh";
        body.style.overflow = "hidden";
        window.scrollTo(0, 0);
        primaryNav.style.position = "absolute"; 
    }
}



bars.onclick = function(event){
    rememberY = event.pageY;
    mobileNav.style.display = "flex";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    window.scrollTo(0,0);
    primaryNav.style.position = "absolute";
    
    
}