'use-script';

$(document).ready(function () {
    let $thumbnails = $(".thumbnail");
    let $prevImage = $(".collection-image.prev");
    let $currentImage = $(".collection-image.current");
    let $categoryEl = $(".category");
    let $titleText = $(".title-text");
    let $subtitleEl = $(".subtitle");
    let $cssGradient = `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.40) 88.8%),
        linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.20) 81.73%),
        linear-gradient(0deg, rgba(0, 0, 0, 0) 82.51%, rgba(0, 0, 0, 0.20) 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)`;

    let currentIndex = 0;
    let previousIndex = 0;

    let $contents = $(".thumbnail").detach();
    $currentImage.after("<div class='thumbnails'/>");

    $(".thumbnails").html($contents);

    // Initialize with first thumbnail
    let $first = $thumbnails.eq(0);
    $prevImage.css("background-image", `${$cssGradient}, url(${$first.data("bg")})`);
    $currentImage.css("background-image", `${$cssGradient}, url(${$first.data("bg")})`);
    updateContent($first);

    function updateContent($thumb) {
        $categoryEl.text($thumb.data("category"));
        $titleText.text($thumb.data("title"));
        $subtitleEl.text($thumb.data("subtitle"));
    }

    $thumbnails.on("click", function () {
        let $clicked = $(this);
        let index = $thumbnails.index($clicked);

        if (index === currentIndex) return;

        previousIndex = currentIndex;
        currentIndex = index;

        let direction = index > previousIndex ? "left" : "right";

        // Set previous image
        $prevImage.css("background-image", `${$cssGradient}, url(${$thumbnails.eq(previousIndex).data("bg")})`);

        // Stop any ongoing animation
        $currentImage.off("animationend").css("animation", "none");

        // Force reflow to restart animation properly
        $currentImage[0].offsetHeight;

        // Set new image + apply animation
        $currentImage.css("background-image", `${$cssGradient}, url(${$clicked.data("bg")})`);
        $currentImage.css("animation",
            direction === "left"
                ? "curtainRevealFromLeft 1.2s cubic-bezier(0.1, 0, 0.2, 1)"
                : "curtainRevealFromRight 1.2s cubic-bezier(0.1, 0, 0.2, 1)"
        );

        // Reset animation only after it finishes
        $currentImage.on("animationend", function () {
            $(this).css("animation", "none");
        });

        // Update text
        updateContent($clicked);

        // Active thumbnail highlight
        $thumbnails.removeClass("active");
        $clicked.addClass("active");
    });
});
