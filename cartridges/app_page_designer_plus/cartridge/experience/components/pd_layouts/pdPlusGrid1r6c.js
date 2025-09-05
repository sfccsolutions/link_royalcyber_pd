'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');


/**
 * Render logic for the pd_layouts.pdPlusGrid1row6column.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var component = context.component;

    var content = context.content;
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.sectionHeight = content.sectionHeight ? content.sectionHeight : '';
    model.bgComponentColor = 'style="';

    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }

    if (content.gradiantBackgroundColor) {
        model.bgComponentColor += 'background-image: ' + content.gradiantBackgroundColor + '; ';
    }

    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + '%;';
    }

    model.bgComponentColor += '"';

    if (content.backgroundImage) {
        model.imageAlt = content.imageAlt ? content.imageAlt : '';

        model.backgroundImage = {
            src: {
                mobile: ImageTransformation.url(content.backgroundImage, { device: 'mobile' }),
                desktop: ImageTransformation.url(content.backgroundImage, { device: 'desktop' })
            },
            alt: model.imgAlt,
            focalPointX: (content.backgroundImage.focalPoint.x * 100) + '%',
            focalPointY: (content.backgroundImage.focalPoint.y * 100) + '%'
        };
    }

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusGrid1r6c').render(model).text;
};
