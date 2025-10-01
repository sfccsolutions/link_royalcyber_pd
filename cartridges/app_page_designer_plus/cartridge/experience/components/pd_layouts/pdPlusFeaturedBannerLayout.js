'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');
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

    model.imgBannerDetail = content.imgBannerDetail ? content.imgBannerDetail : '';

    model.brandText = content.brandText !== undefined ? content.brandText : '';

    model.assetSrc = content.assetSrc ? content.assetSrc : 'image';

    if (content.bgImage) {
        model.bgImage = content.bgImage.file.url;
    }

    if (content.bgVideo) {
        model.bgVideo = content.bgVideo;
    }

    model.isContentSticky = content.isContentSticky ? 'is-sticky' : '';
    model.productTitle = content.productTitle ? content.productTitle : '';
    model.productSubTitle = content.productSubTitle ? content.productSubTitle : '';
    model.productDescription = content.productDescription ? content.productDescription : '';
    model.productLink = content.productLink ? content.productLink : '';
    model.productLinkNewTab = content.productLinkNewTab ? 'active' : '';


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

    model.styleBlock = content.styleBlock !== null ? content.styleBlock : '';

    /* Horizontal Position of Hotspot Content */
    if (content.hotspotContentXPos === 'left') {
        model.hotspotContentXPos = 'hotspotContent--xleft';
    } else if (content.hotspotContentXPos === 'center') {
        model.hotspotContentXPos = 'hotspotContent--xcenter';
    } else if (content.hotspotContentXPos === 'right') {
        model.hotspotContentXPos = 'hotspotContent--xright';
    }

    /* Vertical Position of Hotspot Content */
    if (content.hotspotContentYPos === 'top') {
        model.hotspotContentYPos = 'hotspotContent--ytop';
    } else if (content.hotspotContentYPos === 'center') {
        model.hotspotContentYPos = 'hotspotContent--ycenter';
    } else if (content.hotspotContentYPos === 'bottom') {
        model.hotspotContentYPos = 'hotspotContent--ybottom';
    }

    if (content.noOfTiles) {
        let tilesDisplay = ArrayList();

        for (let i = 0; i < content.noOfTiles; i++) {
            tilesDisplay.add("PDPlusFeatureBanner" + i);
        }

        model.tilesDisplay = tilesDisplay;
    }

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusFeaturedBannerLayout').render(model).text;
};
