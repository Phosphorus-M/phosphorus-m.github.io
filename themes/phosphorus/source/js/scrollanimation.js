document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".thumbnail.preload");
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            console.log(observer, entries);
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.url;
                    image.classList.remove("preload");
                    console.log(image.parentElement.parentElement.parentElement);
                    image.parentElement.parentElement.parentElement.classList.add("animate");
                    image.parentElement.parentElement.parentElement.classList.remove("animate");
                    image.parentElement.parentElement.parentElement.classList.add("shown");
                    imageObserver.unobserve(image);
                    masonry.layout();
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".thumbnail.preload");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = document.body.scrollTop;
                lazyloadImages.forEach(function (el) {
                    if (el.getBoundingClientRect().top < window.innerHeight + scrollTop + 500) {
                        const url = el.getAttribute("data-url");
                        el.setAttribute("src", url);
                        el.classList.remove("preload");
                        el.parentElement.parentElement.parentElement.classList.add("animate");
                        el.parentElement.parentElement.parentElement.classList.remove("animate");
                        el.parentElement.parentElement.parentElement.classList.add("shown");
                        lazyloadImages = document.querySelectorAll(".thumbnail.preload");
                        masonry.layout();
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll");
                    window.removeEventListener("resize");
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
    }
})