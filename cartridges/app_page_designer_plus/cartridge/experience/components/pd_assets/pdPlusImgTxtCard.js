'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');
/**
 * Render logic for the storefront.photoTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    //model.isContainer = content.isContainer ? 'container-fluid' : 'container';

    /* Image File Uploader */
    if (content.cardImgFile) {
        /* Image File Alt Text */
        model.cardImgAlt = content.cardImgAlt ? content.cardImgAlt : null;
        model.cardImgFile = content.cardImgFile ? content.cardImgFile.file.url : null;
    }

    if (content.cardRichText) {
        model.cardRichText = content.cardRichText;
    }

    if(content.cardTextColor) {
        model.cardTextColor = content.cardTextColor;
    }

    model.animationType = content.animationType ? content.animationType : '';
    model.animationDuration = content.animationDuration ? content.animationDuration : '';

    return new Template('experience/components/pd_assets/pdPlusImgTxtCard').render(model).text;
};
