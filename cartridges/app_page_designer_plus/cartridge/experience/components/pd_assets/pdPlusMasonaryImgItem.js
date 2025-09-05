'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');
/**
 * Render logic for the storefront. masonary photo Tile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    /* Image File Uploader */
    if (content.masonaryImgFile) {
        /* Image File Alt Text */
        model.masonaryImgAlt = content.masonaryImgAlt? content.masonaryImgAlt : content.masonaryImageText;
        model.masonaryImgFile = content.masonaryImgFile ? content.masonaryImgFile.file.url : null;
    }

    if (content.masonaryImageText) {
        model.masonaryImageText = content.masonaryImageText;
    }
    
    if (content.masonaryTileLink) {
        model.masonaryTileLink = content.masonaryTileLink;
    } else {
        model.masonaryTileLink = 'javascript:void(0)';
    }

    if (content.masonaryTileNewtab) {
        model.masonaryTileNewtab = content.masonaryTileNewtab;
    }


    return new Template('experience/components/pd_assets/pdPlusMasonaryImgItem').render(model).text;
};
