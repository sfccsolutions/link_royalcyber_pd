'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    var { tns } = require("tiny-slider");

    //Anonymous Function used in the Page Designer Slider Blog Component
    tns({
        container: '.top-banner-bar',
        items: 1,
        slideBy: 1,
        axis: 'horizontal',
        swipeAngle: true,
        speed: 400,
        autoplayTimeout: 3000,
        mouseDrag: true,
        autoplay: false,
        nav:false,
        arrows:true,
        controls:true,
        autoplayButton: false,
        rewind: false,
        gutter: 0,
        autoHeight: false,
        autoplayButtonOutput: false
    });
});

