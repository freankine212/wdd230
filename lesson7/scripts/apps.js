let imagesToLoad = document.querySelectorAll("img[data-src]"); //Get all the images with data sources

const loadImages = (image) => { //Make a function to put data-src into src
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};
/*imagesToLoad.forEach((img) => { 
    loadImages(img);
}); */

if ("IntersectionObserver" in window) { //Is there an intersetion observer class?
    const observer = new IntersectionObserver((items, observer) => { //Make an instance
        items.forEach((item) => { //Check each triggering item
            if (item.isIntersecting) { //Check if it's intersecting...the page
                loadImages(item.target); //See above
                observer.unobserve(item.target); //Turn off the observer
            }
        });
    });
    imagesToLoad.forEach((img) => { //Set the observer to observe all the images
        observer.observe(img);
    });
} else { //No, there is not an intersection observerer so...
    imagesToLoad.forEach((img) => {  // load them all
        loadImages(img);
    });
}