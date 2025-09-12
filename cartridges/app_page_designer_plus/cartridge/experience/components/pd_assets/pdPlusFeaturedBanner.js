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

    /* Image File Uploader */
    if (content.imgFile) {
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

    model.imgBannerDetail = content.imgBannerDetail ? content.imgBannerDetail : '';

    /* Banner Content Position */
    // if (content.bannerContentPosition === 'top left') {
    //     model.bannerContentPosition = 'bnrContent--topLeft';
    // } else if (content.bannerContentPosition === 'left center') {
    //     model.bannerContentPosition = 'bnrContent--leftcenter';
    // } else if (content.bannerContentPosition === 'bottom left') {
    //     model.bannerContentPosition = 'bnrContent--bottomleft';
    // } else if (content.bannerContentPosition === 'top center') {
    //     model.bannerContentPosition = 'bnrContent--topCenter';
    // } else if (content.bannerContentPosition === 'center') {
    //     model.bannerContentPosition = 'bnrContent--center';
    // } else if (content.bannerContentPosition === 'top right') {
    //     model.bannerContentPosition = 'bnrContent--topRight';
    // }

    if (content.bannerContentPosition === 'left top') {
        model.bannerContentPosition = 'bnrContent--leftTop';
    } else if (content.bannerContentPosition === 'center top') {
        model.bannerContentPosition = 'bnrContent--centerTop';
    } else if (content.bannerContentPosition === 'right top') {
        model.bannerContentPosition = 'bnrContent--rightTop';
    } else if (content.bannerContentPosition === 'center left') {
        model.bannerContentPosition = 'bnrContent--centerLeft';
    } else if (content.bannerContentPosition === 'center') {
        model.bannerContentPosition = 'bnrContent--center';
    } else if (content.bannerContentPosition === 'center right') {
        model.bannerContentPosition = 'bnrContent--centerRight';
    } else if (content.bannerContentPosition === 'bottom left') {
        model.bannerContentPosition = 'bnrContent--bottomLeft';
    } else if (content.bannerContentPosition === 'bottom center') {
        model.bannerContentPosition = 'bnrContent--bottomCenter';
    } else if (content.bannerContentPosition === 'bottom right') {
        model.bannerContentPosition = 'bnrContent--bottomRight';
    }

    model.brandText = content.brandText !== undefined ? content.brandText : '';

    model.styleBlock = content.styleBlock !== null ? content.styleBlock : '';

    model.hotspotPro = content.hotspotPro !== null ? content.hotspotPro : '';



    /* Product Hotspot */
    if (content.hotspotImg) {
        model.hotspotImgAlt = content.hotspotImgAlt ? content.hotspotImgAlt : null;

        model.hotspotImg = {
            src: {
                mobile: ImageTransformation.url(content.hotspotImg, { device: 'mobile' }),
                desktop: ImageTransformation.url(content.hotspotImg, { device: 'desktop' })
            },
            alt: content.hotspotImgAlt,
            focalPointX: (content.hotspotImg.focalPoint.x * 100) + '%',
            focalPointY: (content.hotspotImg.focalPoint.y * 100) + '%'
        };
    }

    model.hotspotContent = content.hotspotContent !== null ? content.hotspotContent : '';

    /* Vertical Position of Hotspot Content */
    if (content.hotspotContentYPos === 'top') {
        model.hotspotContentYPos = 'hotspotContent--ytop';
    } else if (content.hotspotContentYPos === 'center') {
        model.hotspotContentYPos = 'hotspotContent--ycenter';
    } else if (content.hotspotContentYPos === 'bottom') {
        model.hotspotContentYPos = 'hotspotContent--ybottom';
    }

    model.hotspotLink = content.hotspotLink !== null ? content.hotspotLink : '#';

    model.hotspotLinkNewTab = content.hotspotLinkNewTab !== null ? 'target="_blank"' : '';

    return new Template('experience/components/pd_assets/pdPlusFeaturedBanner').render(model).text;
};
