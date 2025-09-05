'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for the storefront.editorialRichText component
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    model.imgScaleHover = content.imgScaleHover;
    model.headingText = content.headingText ? content.headingText : '';
    model.richText = content.richText ? content.richText : '';
    model.maxWidthText = content.maxWidthText ? content.maxWidthText : '';
    model.animationType = content.animationType ? content.animationType : '';
    model.animationDuration = content.animationDuration ? content.animationDuration : '';

    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = 'javascript:void(0)';
    }

    model.tileNewtab = content.tileNewtab;

    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = 'javascript:void(0)';
    }

    model.tileNewtab = content.tileNewtab;

    if(content.buttonText) {
        model.buttonText = content.buttonText;
    }

    model.boxContentTxtColor = 'style="';
    if (content.contentBlockTxtColor) {
        model.boxContentTxtColor += 'color:' + content.contentBlockTxtColor.value + '; ';
    }
    model.boxContentTxtColor += '"';

    /* Container Area color Scheme styles */
    model.bgComponentColor = 'style="';
    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + '%;';
    }

    model.bgComponentColor += '"';

    if (content.textShadow === 'Text White Shadow') {
        model.textShadow = 'txt-white-shadow';
    } else if (content.textShadow === 'Text Black Shadow') {
        model.textShadow = 'txt-black-shadow';
    }

    model.customShadowParagraph = 'style="';
    if (content.customShadowParagraph) {
        model.customShadowParagraph += 'text-shadow:' + content.customShadowParagraph + '; ';
    }
    model.customShadowParagraph += '"';

    model.customShadowHeading = 'style="';
    if (content.customShadowHeading) {
        model.customShadowHeading += 'text-shadow:' + content.customShadowHeading + '; ';
    }
    model.customShadowHeading += '"';

    /* button color styles */
    model.btnBgComponentColor = 'style="';
    if (content.buttonBgColor) {
        model.btnBgComponentColor += 'background-color: ' + content.buttonBgColor.value + '; ';
    }
    if (content.buttonTextColor) {
        model.btnBgComponentColor += 'color: ' + content.buttonTextColor.value + '; ';
    }
    if (content.buttonBorderColor) {
        model.btnBgComponentColor += 'border-color: ' + content.buttonBorderColor.value + '; ';
    }
    model.btnBgComponentColor += '"';

    return new Template('experience/components/pd_assets/pdPlusContentBoxEditor').render(model).text;
};
