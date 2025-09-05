'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var slickBuilder = require('*/cartridge/models/experience/slickBuilder.js');
/**
 * Render logic for the layouts.slick.
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    model = slickBuilder.init(model, context);

    return new Template('experience/components/pd_assets/pdPlusPhotoSlider').render(model).text;
    
};
