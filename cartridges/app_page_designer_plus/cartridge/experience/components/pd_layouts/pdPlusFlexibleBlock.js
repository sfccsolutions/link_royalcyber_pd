'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');

/**
 * Render logic for storefront.productTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;
    var component = context.component;

    model.customClass = content.customClass ? content.customClass : '';
    model.parallaxSection = content.parallaxSection ? content.parallaxSection : '';
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : 'transparent';

    model.BGImageProperties = 'style="' +
        (content.backgroundImage ? 'background-image: url(' + content.backgroundImage.file.url + '); ' : '') +
        (content.bgGradiant ? 'background-image: ' + content.bgGradiant + '; ' : '') +
        (content.sectionHeight ? 'min-height: ' + content.sectionHeight + '; ' : '') +
        (content.backgroundColor ? 'background-color: ' + content.backgroundColor.value + '; ' : '') +
    '"';

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusFlexibleBlock').render(model).text;
};

