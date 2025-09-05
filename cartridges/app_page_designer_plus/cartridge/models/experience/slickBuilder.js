'use strict';

var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');

/**
 * Helper to encapsulate common code for building a slick
 *
 * @param {Object} model - model object for a component
 * @param {Object} context - model object for a component
 * @return {Object} model - prepared model
 */
function init(model, context) {
    var content = context.content;
    var component = context.component;
    var slickConfig = {
        mobile: {
            arrows: content.mobileControl,
            dots: content.mobileIndicator,
            slidesToShow: content.mobileSlidesToDisplay,
        },
        tablet: {
            arrows: content.tabletControl,
            dots: content.tabletIndicator,
            slidesToShow: content.tabletSlidesToDisplay,
        },
        desktop: {
            arrows: content.desktopControl,
            dots: content.desktopIndicator,
            slidesToShow: content.desktopSlidesToDisplay,
        }
    };

    model.id = 'slick-' + component.getID();
    model.regions = PageRenderHelper.getRegionModelRegistry(component);
    model.slickConfiguration = JSON.stringify(slickConfig);
    model.slickScrollClass = content.desktopSlidesToDisplay > 1 ? "slides-scroll" : "";
    model.slickArrowAdjustClass = content.desktopSlidesToDisplay > 1 && content.desktopControl ? "arrows-adjustment" : "";
    if (content.link) {
        model.link = content.link;
    }
    if (content.buttonText) {
        model.buttonText = content.buttonText;
    }
    if (content.textHeadline) {
        model.title = content.textHeadline;
    }
    if (content.className) {
        model.customClassName = content.className;
    }

    return model;
}

module.exports = {
    init: init
};
