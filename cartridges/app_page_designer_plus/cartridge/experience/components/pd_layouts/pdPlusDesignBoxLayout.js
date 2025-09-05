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

    model.customCss = content.customCss ? content.customCss : '';
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : '';
    model.headingText = content.headingText ? content.headingText : null;
    model.headingTxtColor = content.headingTxtColor ? content.headingTxtColor : null;

    if (content.bgImageParallax === 'Parallax') {
        model.bgImageParallax = 'parallax-bg';
    } else if (content.bgImageParallax === 'Normal') {
        model.bgImageParallax = 'normal-bg';
    }

    /* Backgroung Image/Color Settings */
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

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusDesignBoxLayout').render(model).text;
};