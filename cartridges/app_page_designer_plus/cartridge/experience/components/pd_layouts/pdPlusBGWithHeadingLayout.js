'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');

/**
 * Render logic for the pd_layouts.pdPlusTabsLayout.
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
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : '';
    model.customCss = content.customCss ? content.customCss : '';

    if (content.bgImageParallax === 'Parallax') {
        model.bgImageParallax = 'parallax-bg';
    } else if (content.bgImageParallax === 'Normal') {
        model.bgImageParallax = 'normal-bg';
    }

    if (content.bgImageParallax === 'Text White Shadow') {
        model.bgImageParallax = 'txt-white-shadow';
    } else if (content.bgImageParallax === 'Text Black Shadow') {
        model.bgImageParallax = 'txt-black-shadow';
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
        model.BGImageProperties += 'background-color: ' + content.backgroundColor + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.BGImageProperties += 'opacity: ' + content.backgroundColorAlpha + '%' + ';';
    }
    model.BGImageProperties += '"';

    if(content.sectionTopHeading) {
        model.sectionTopHeading = content.sectionTopHeading;
    }
    if(content.sectionTopText) {
        model.sectionTopText = content.sectionTopText;
    }

    model.sectionTextColor = content.sectionTextColor.value ? content.sectionTextColor.value : '';

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusBGWithHeadingLayout').render(model).text;
};