'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');

/**
 * Render logic for the pd_layouts.pdplusSlideWithImage.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var component = context.component;

    var content = context.content;
    
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.customizeSpaces = content.customizeSpaces ? 'customize-true' : '';
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : '';
    model.customCss = content.customCss ? content.customCss : '';

    if (content.bgImageParallax === 'Parallax') {
        model.bgImageParallax = 'parallax-bg';
    } else if (content.bgImageParallax === 'Normal') {
        model.bgImageParallax = 'normal-bg';
    } else {
        model.bgImageParallax = '';
    }

     /* text with Image layout if found then concatenate its class name */
     if (content.textXaxisAlignment === 'text on left') {
        model.textXaxisAlignment = 'order-text-left';
    } else if (content.textXaxisAlignment === 'text on right') {
        model.textXaxisAlignment = 'order-text-right';
    }

    if (content.textShadow === 'Text White Shadow') {
        model.textShadow = 'txt-white-shadow';
    } else if (content.textShadow === 'Text Black Shadow') {
        model.textShadow = 'txt-black-shadow';
    }

    /* Horizontal Position of text Container if found then concatenate its Class Name */
    if (content.textAlignmentVertical === 'top') {
        model.textAlignmentVertical = 'start';
    } else if (content.textAlignmentVertical === 'center') {
        model.textAlignmentVertical = 'center';
    } else if (content.textAlignmentVertical === 'bottom') {
        model.textAlignmentVertical = 'end';
    }

    model.BGImageProperties = 'style="';
    if (content.backgroundImage) {
        model.BGImageProperties += 'background-image: url(' + content.backgroundImage.file.url + ');';
    }

    if (content.bgGradiant) {
        model.BGImageProperties += 'background-image: ' + content.bgGradiant + '; ';
    }

    if (content.sectionHeight) {
        model.BGImageProperties += 'min-height: ' + content.sectionHeight + '; ';
    }
    
    if (content.backgroundColor) {
        model.BGImageProperties += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.BGImageProperties += 'opacity: ' + content.backgroundColorAlpha + '%' + ';';
    }

    model.BGImageProperties += '"';

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusSlideWithImage').render(model).text;
};