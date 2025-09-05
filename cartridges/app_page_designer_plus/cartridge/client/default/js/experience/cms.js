function readMoreToggle() {
    var sections = $('.fp-section');
    var firstSectionActiveAdded = false;
    var currentActiveIndex = 0;

    function toggleActiveClass() {
        var scrollPosition = $(window).scrollTop();

        sections.each(function (index) {
            var offset = $(this).offset().top;
            var height = $(this).outerHeight();

            var sectionThreshold = offset - height / 2;

            if (scrollPosition > sectionThreshold) {
                currentActiveIndex = index;
            }
        });

        sections.eq(currentActiveIndex).addClass('active');

        if (currentActiveIndex === 0 && !firstSectionActiveAdded) {
            firstSectionActiveAdded = true;
        } else if (currentActiveIndex !== 0) {
            firstSectionActiveAdded = false;
        }

        sections.not(':eq(' + currentActiveIndex + ')').removeClass('active');
    }

    toggleActiveClass();

    $(window).on('scroll', function () {
        toggleActiveClass();
    });
}

// headerSpacing = () => {
//     let headerHeight = $('header').outerHeight();
//     $('#maincontent').css("padding-top", headerHeight);
// } 



function cms() {
    readMoreToggle ();
    // headerSpacing();
};

module.exports = cms;

