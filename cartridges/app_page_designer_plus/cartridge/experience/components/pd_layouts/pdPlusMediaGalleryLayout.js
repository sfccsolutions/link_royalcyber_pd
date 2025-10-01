'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
var ArrayList = require('dw/util/ArrayList');


/**
 * Render logic for the pd_layouts.pdPlusGrid1row1column.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var component = context.component;
    var content = context.content;

    if (content.noOfTiles) {
        let tilesDisplay = ArrayList();

        for (let i = 0; i < content.noOfTiles; i++) {
            tilesDisplay.add("PDPlusMediaGallery" + i);
        }

        model.tilesDisplay = tilesDisplay;
    }

    model.btnLink = content.btnLink !== null ? content.btnLink : '';

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusMediaGalleryLayout').render(model).text;
};
