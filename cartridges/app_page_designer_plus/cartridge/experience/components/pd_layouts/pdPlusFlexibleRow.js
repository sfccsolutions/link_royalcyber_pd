'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for storefront.productTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;
    var component = context.component;

    model = content;

    model.customClass = content.customClass ? content.customClass : '';
    model.parallaxSection = content.parallaxSection ? content.parallaxSection : '';
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : 'transparent';
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.orderColumns = content.orderColumns ? content.orderColumns : 'order-left-to-right';
    model.horizontalAlignment = content.horizontalAlignment ? content.horizontalAlignment : 'horizontal-left';
    model.verticalAlignment = content.verticalAlignment ? content.verticalAlignment : 'vertical-top';

    model.BGImageProperties = 'style="' +
        (content.backgroundImage ? 'background-image: url(' + content.backgroundImage.file.url + '); ' : '') +
        (content.bgGradiant ? 'background-image: ' + content.bgGradiant + '; ' : '') +
        (content.sectionHeight ? 'min-height: ' + content.sectionHeight + '; ' : '') +
        (content.backgroundColor ? 'background-color: ' + content.backgroundColor.value + '; ' : '') +
    '"';
    
    model.containerConfigurations = {
        removeGutter: content.removeGutter ? content.removeGutter : '',
        colDefault: content.colDefault ? content.colDefault : '',
        calForTablet: content.calForTablet ? content.calForTablet : '',
        calForMobile: content.calForMobile ? content.calForMobile : '',
        colForDesktop: content.colForDesktop ? content.colForDesktop : '',
        colForXLDesktop: content.colForXLDesktop ? content.colForXLDesktop : ''
    };

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusFlexibleRow').render(model).text;
};
