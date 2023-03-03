'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusImageBanner component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for pdPlusImageBanner component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();

    /* Custom Class Name of Banner Component */
    model.className = content.className ? content.className : null;

    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = 'javascript:void(0)';
    }

    model.tileNewtab = content.tileNewtab;

    /* Image Scale on Hover Checkbox */
    model.imgScaleHover = content.imgScaleHover;

    /* Vertical Position of Image if found then concatenate its class name */
    if (content.imageYPos === 'flex-start') {
        model.imageYPos = 'bnr--xstart';
    } else if (content.imageYPos === 'center') {
        model.imageYPos = 'bnr--xcenter';
    } else if (content.imageYPos === 'flex-end') {
        model.imageYPos = 'bnr--xbottom';
    }

    /* Horizontal Position of Image if found then concatenate its Class Name */

    if (content.imageXPos === 'flex-start') {
        model.imageXPos = 'bnr--ystart';
    } else if (content.imageXPos === 'center') {
        model.imageXPos = 'bnr--ycenter';
    } else if (content.imageXPos === 'flex-end') {
        model.imageXPos = 'bnr--yright';
    }

    /* Image File Uploader */
    if (content.imgFile) {
        /* Image File Alt Text */
        model.imgAlt = content.imgAlt ? content.imgAlt : null;

        model.imgFile = {
            src: {
                mobile: ImageTransformation.url(content.imgFile, { device: 'mobile' }),
                desktop: ImageTransformation.url(content.imgFile, { device: 'desktop' })
            },
            alt: content.imgAlt,
            focalPointX: (content.imgFile.focalPoint.x * 100) + '%',
            focalPointY: (content.imgFile.focalPoint.y * 100) + '%'
        };
    }

    /* Image Title */
    model.imgTitle = content.imgTitle;

    /* Title Color */
    if (content.imgTitleColor) {
        model.styleTitleColor = 'style="color: ' + content.imgTitleColor.value + '; "';
    }

    /* Sub Title Color */
    if (content.imgSubTitleColor) {
        model.styleSubTitleColor = 'style="color: ' + content.imgSubTitleColor.value + '; "';
    }

    /* imgBanner Caption Color and Alpha Property*/
    model.imageBannerStyles = 'style="';
    if (content.imgBannerCaptionColor) {
        model.imageBannerStyles += 'background-color: ' + content.imgBannerCaptionColor.value + '; ';
    }

    if (content.imgBannerColorAlpha) {
        model.imageBannerStyles += 'opacity: ' + content.imgBannerColorAlpha + '; ';
    }
    model.imageBannerStyles += '"';

    /* Image SubTitle */
    model.imgSubTitle = content.imgSubTitle;

    return new Template('experience/components/pd_assets/pdPlusImageBanner').render(model).text;
};
