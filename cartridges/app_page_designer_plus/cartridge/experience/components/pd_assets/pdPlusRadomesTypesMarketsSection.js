'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusAccordion component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');


/**
 * Render logic for pdPlusAccordions component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();

    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.customClass = content.customClass ? content.customClass : '';
    model.radomesTypesMarkets = content.radomesTypesMarkets ? content.radomesTypesMarkets : '';
    /* Image 1 */
    model.rTMImage1Detail = content.rTMImage1Detail ? content.rTMImage1Detail : '';
    model.rTMImage1 = content.rTMImage1 ? content.rTMImage1.file.url : null;
    // New tab

    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = 'javascript:void(0)';
    }
    model.tileNewtab = content.tileNewtab;
/* End Image 1 */

/* Image 2 */
    model.rTMImage2Detail = content.rTMImage2Detail ? content.rTMImage2Detail : '';
    model.rTMImage2 = content.rTMImage2 ? content.rTMImage2.file.url : null;
    
    // New tab

    if (content.tileLink2) {
        model.tileLink2 = content.tileLink2;
    } else {
        model.tileLink2 = 'javascript:void(0)';
    }
    model.tileNewtab2 = content.tileNewtab2;

    /* End Image 2 */

    /* Image 3 */
    model.rTMImage3Detail = content.rTMImage3Detail ? content.rTMImage3Detail : '';
    model.rTMImage3 = content.rTMImage3 ? content.rTMImage3.file.url : null;
    
    // New tab

    if (content.tileLink3) {
        model.tileLink3 = content.tileLink3;
    } else {
        model.tileLink3 = 'javascript:void(0)';
    }
    model.tileNewtab3 = content.tileNewtab3;

    /* End Image 3 */

    /* Image 34*/
    model.rTMImage4Detail = content.rTMImage4Detail ? content.rTMImage4Detail : '';
    model.rTMImage4 = content.rTMImage4 ? content.rTMImage4.file.url : null;
    
    // New tab

    if (content.tileLink4) {
        model.tileLink4 = content.tileLink4;
    } else {
        model.tileLink4 = 'javascript:void(0)';
    }
    model.tileNewtab4 = content.tileNewtab4;

    /* End Image 4 */

   

    

    model.bgComponentColor = 'style="';
    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + ';';
    }
    model.bgComponentColor += '"';

     /* shadow on text  */

    /* shadow on text  */
    if (content.textShadow === 'Text White Shadow') {
        model.textShadow = 'txt-white-shadow';
    } else if (content.textShadow === 'Text Black Shadow') {
        model.textShadow = 'txt-black-shadow';
    }





    /* parallax text Alignment  */
    if (content.textAlignment === 'left') {
        model.textAlignment = 'text-start';
    } else if (content.textAlignment === 'right') {
        model.textAlignment = 'text-end';
    } else if (content.textAlignment === 'center') {
        model.textAlignment = 'text-center';
    }



    /* Detail Text Color  */
    model.textContentColor = 'style="';
    
    if (content.textColor) {
        model.textContentColor += 'color: ' + content.textColor.value + '; ';
    }

    model.textContentColor += '"';

    /* Detail Text Color  */
    model.imgtextContentColor = 'style="';
    
    if (content.imagetextColor) {
        model.imgtextContentColor += 'color: ' + content.imagetextColor.value + '; ';
    }

    model.imgtextContentColor += '"';

 /* Margin | Padding Settings */
    
    model.UILayout = 'style="';
    model.UILayout += 'color: ' + content.textColor.value;
    model.UILayout += '; padding-top: ' + (content.setPaddingTop ? content.setPaddingTop : '0');
    model.UILayout += '; padding-right: ' + (content.setPaddingRight ? content.setPaddingRight : '0');
    model.UILayout += '; padding-bottom: ' + (content.setPaddingBottom ? content.setPaddingBottom : '0');
    model.UILayout += '; padding-left: ' + (content.setPaddingLeft ? content.setPaddingLeft : '0');
    model.UILayout += '; margin-top: ' + (content.setMarginTop ? content.setMarginTop : '0');
    model.UILayout += '; margin-right: ' + (content.setMarginRight ? content.setMarginRight : '0');
    model.UILayout += '; margin-bottom: ' + (content.setMarginBottom ? content.setMarginBottom : '0');
    model.UILayout += '; margin-left: ' + (content.setMarginLeft ? content.setMarginLeft : '0');
    model.UILayout += ';"';

    return new Template('experience/components/pd_assets/pdPlusRadomesTypesMarketsSection').render(model).text;
};
