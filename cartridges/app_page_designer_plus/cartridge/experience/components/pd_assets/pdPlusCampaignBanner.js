'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusSmartSlider component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for pdPlusCompaignBanner component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();

    model.bannerMessage = content.bannerMessage;
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';

    model.bgComponentColor = 'style="';
    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + '%;';
    }
    if (content.promoTextColor) {
        model.bgComponentColor += 'color: ' + content.promoTextColor.value + '; ';
    }
    if (content.promoBorderColor) {
        model.bgComponentColor += 'border-color: ' + content.promoBorderColor.value + '; ';
    }

    model.bgComponentColor += '"';

    
    return new Template('experience/components/pd_assets/pdPlusCampaignBanner').render(model).text;
};
