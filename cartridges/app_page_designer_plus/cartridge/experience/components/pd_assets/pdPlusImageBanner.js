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
    model.buttontext = content.buttontext;


    /* Image Scale on Hover Checkbox */
    // model.imgScaleHover = content.imgScaleHover;

    /* Vertical Position of Image if found then concatenate its class name */ 
    if (content.imageYPos === 'top') {
        model.imageYPos = 'bnr--xstart';
    } else if (content.imageYPos === 'center') {
        model.imageYPos = 'bnr--xcenter';
    } else if (content.imageYPos === 'bottom') {
        model.imageYPos = 'bnr--xbottom';
    }

    /* Horizontal Position of Image if found then concatenate its Class Name */

    if (content.imageXPos === 'right') {
        model.imageXPos = 'bnr--ystart';
    } else if (content.imageXPos === 'center') {
        model.imageXPos = 'bnr--ycenter';
    } else if (content.imageXPos === 'left') {
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

    /* imgBanner Caption Color and Alpha Property*/
    model.imageBannerStyles = 'style="';
    if (content.imgBannerCaptionColor) {
        model.imageBannerStyles += 'background-color: ' + content.imgBannerCaptionColor.value + '; ';
    }

    if (content.imgBannerColorAlpha) {
        model.imageBannerStyles += 'opacity: ' + content.imgBannerColorAlpha + '; ';
    }

    model.imageBannerStyles += '"';

    /* Button Bakcground Style */

    model.btnBgStyles = 'style="';
    if (content.btnBgColor) {
        model.btnBgStyles += 'background-color: ' + content.btnBgColor.value + '; ';
    }

    if (content.tabTextColor) {
        model.btnBgStyles += 'color: ' + content.tabTextColor.value + '; ';
    }

    if (content.btnFontSize) {
        model.btnBgStyles += 'font-size: ' + content.btnFontSize.value + '; ';
    }


    if (content.buttonBorderColor) {
        model.btnBgStyles += 'border-color: ' + content.buttonBorderColor.value + '; ';
    }

    model.btnBgStyles += '"';

    /* Border Radius for text */
    if (content.accrBorderRadius === 'square') {
        model.accrBorderRadius = 'square-bordered';
    } else if (content.accrBorderRadius === 'rounded') {
        model.accrBorderRadius = 'rounded-bordered';
    } else if (content.accrBorderRadius === 'circled') {
        model.accrBorderRadius = 'circled-bordered';
    }

    /* Button Border Radiuse */
    if (content.btnBorderRadius === 'square') {
        model.borderRadiusBtn = 'square-bordered';
    } else if (content.btnBorderRadius === 'rounded') {
        model.borderRadiusBtn = 'rounded-bordered';
    } else if (content.btnBorderRadius === 'circled') {
        model.borderRadiusBtn = 'circled-bordered';
    }

    /* Button Bakcground color*/

    model.backgroundColorbtn = 'style="';
    if (content.btnBackgroundColor) {
        model.backgroundColorbtn += 'background-color: ' + content.btnBackgroundColor.value + '; ';
    }

    model.styleBtnTextColor = 'style="';
    if (content.btnTextColor) {
        model.styleBtnTextColor += 'background-color: ' + content.btnTextColor.value + '; ';
    }

        /* Button Size */
    if (content.btnsize === 'small') {
        model.btnwidthsize = 'btn-sm';
    } else if (content.btnsize === 'medium') {
        model.btnwidthsize = 'btn-lg';
    } else if (content.btnsize === 'large') {
        model.btnwidthsize = 'btn-block';
    }

    if (content.aspectRation === 'auto') {
        model.imgAspectRatio = 'auto ';
    } else if (content.aspectRation === 'landscape') {
        model.imgAspectRatio = 'landscape ';
    } else if (content.aspectRation === 'vertical') {
        model.imgAspectRatio = 'vertical ';
    }


     /* Margin | Padding Settings */
     model.UILayout = 'style="';
     model.UILayout += 'padding-top: ' + (content.setPaddingTop ? content.setPaddingTop : '0');
     model.UILayout += '; padding-right: ' + (content.setPaddingRight ? content.setPaddingRight : '0');
     model.UILayout += '; padding-bottom: ' + (content.setPaddingBottom ? content.setPaddingBottom : '0');
     model.UILayout += '; padding-left: ' + (content.setPaddingLeft ? content.setPaddingLeft : '0');
     model.UILayout += '; margin-top: ' + (content.setMarginTop ? content.setMarginTop : '0');
     model.UILayout += '; margin-right: ' + (content.setMarginRight ? content.setMarginRight : '0');
     model.UILayout += '; margin-bottom: ' + (content.setMarginBottom ? content.setMarginBottom : '0');
     model.UILayout += '; margin-left: ' + (content.setMarginLeft ? content.setMarginLeft : '0');


    model.imgBannerDetail = content.imgBannerDetail ? content.imgBannerDetail : '';

    return new Template('experience/components/pd_assets/pdPlusImageBanner').render(model).text;
};
