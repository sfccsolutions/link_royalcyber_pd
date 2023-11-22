'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusAccordion component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');


/**
 * Render logic for pdPlusAccordions component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();


    model.cssSliderNo = 'trigger' + content.cssSliderNo;
    model.cssSliderSlide = content.cssSliderSlide ? content.cssSliderSlide : '';
    model.imgFile = content.imgFile ? content.imgFile.file.url : null;
    

    model.bgComponentColor = 'style="';
    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + '%;';
    }

    if (content.sliderTextColor) {
        model.bgComponentColor += 'color: ' + content.sliderTextColor.value + '; ';
    }

    
    model.bgComponentColor += '"';

    /* Get image from the user for slide */

    

    return new Template('experience/components/pd_assets/pdPlusCssSlider').render(model).text;
};
