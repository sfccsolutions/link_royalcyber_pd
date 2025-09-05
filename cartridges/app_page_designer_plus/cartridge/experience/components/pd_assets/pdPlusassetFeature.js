'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for the module feature component.
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    model.horizontalAlignment = content.horizontalAlignment ? content.horizontalAlignment : 'horizontal-left';
    model.verticalAlignment = content.verticalAlignment ? content.verticalAlignment : 'vertical-top';
    model.featureHeading = content.featureHeading ? content.featureHeading :null;
    model.featureDesc = content.featureDesc ? content.featureDesc : null;

    model.animationType = content.animationType ? content.animationType : '';
    model.animationDuration = content.animationDuration ? content.animationDuration : '';

    model.featureHeadingColor = content.featureHeadingColor !== undefined ? content.featureHeadingColor : 'white';
    
    /*Heading 1 Style */
    // model.para1Configurations = {
    //     font: content.para1Font ? content.para1Font : null,
    //     fontSize: content.para1TextSize ? content.para1TextSize : '1em',
    //     marginHeading: content.para1Margin ? content.para1Margin : '0',
    //     paddingHeading: content.para1Padding ? content.para1Padding : '0',
    //     fontColor: content.para1Color ? content.para1Color : '#000',
    //     fontWeight: content.para1Weight ? content.para1Weight : null,
    //     para1Shadow: content.para1FontShadow ? content.para1FontShadow : null
    // };


    /*Add Laxes Animation and its Class Name */
    model.AnimationLax = content.AnimationLax === 'Animate Image' ? 'animate-img' : content.AnimationLax === 'Column Animate Up' ? 'col-animate-up' : content.AnimationLax === 'Column Animate Down' ? 'col-animate-down' : '';

    model.featureImgWidth = content.featureImgWidth ? content.featureImgWidth: null;
    model.featureIcon = content.featureIcon ? content.featureIcon.file.url : null;
    model.iconAlt = content.iconAlt ? content.iconAlt: 'icon alt';
    model.featureImage = content.featureImage ? content.featureImage.file.url : null;
    model.imgAlt = content.imgAlt ? content.imgAlt: 'image alt';
    model.featureImgDesc = content.featureImgDesc ? content.featureImgDesc : null;

    /*Button Style */
    model.assetCTABorderRadius = content.assetCTABorderRadius ? content.assetCTABorderRadius : '0px';
    model.assetCTALabel = content.assetCTALabel ? content.assetCTALabel : null;
    model.assetCTATitle = content.assetCTATitle ? content.assetCTATitle : null;
    model.assetCTAURL = content.assetCTAURL ? content.assetCTAURL : null;

    model.assetCTABgColor = content.assetCTABgColor ? content.assetCTABgColor : '#ee2e23';
    model.assetCTATextColor = content.assetCTATextColor ? content.assetCTATextColor : '#ffffff';

    model.assetCTAHoverBgColor = content.assetCTAHoverBgColor ? content.assetCTAHoverBgColor : '#ee2e23';
    model.assetCTAHoverTextColor = content.assetCTAHoverTextColor ? content.assetCTAHoverTextColor : '#ffffff';


    return new Template('experience/components/pd_assets/pdPlusassetFeature').render(model).text;
};
