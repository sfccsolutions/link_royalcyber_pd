'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusMediaGallery component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');

/**
 * Render logic for pdPlusMediaGallery component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;


    model.title = content.title !== null ? content.title : '';
    model.subTitle = content.subTitle !== null ? content.subTitle : '';
    model.category = content.category !== null ? content.category : '';
    model.btnLink = content.btnLink !== null ? content.btnLink : '';
    model.isNewTab = content.isNewTab !== null ? 'active' : '';

    if (content.thumbImage) {
        // model.thumbImageAlt = content.thumbImage.file.name;
        model.thumbImage = content.thumbImage ? content.thumbImage.file.url : null;
    }

    if (content.largeImage) {
        // model.largeImageAlt = content.largeImage.file.name;
        model.largeImage = content.largeImage ? content.largeImage.file.url : null;
    }


    return new Template('experience/components/pd_assets/pdPlusMediaGalleryContent').render(model).text;
};
