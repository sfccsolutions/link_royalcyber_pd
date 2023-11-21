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

    model.ParallaxScroolingSection = content.ParallaxScroolingSection ? content.ParallaxScroolingSection : '';
    model.ParallaxScroolingSectionbtn = content.ParallaxScroolingSectionbtn ? content.ParallaxScroolingSectionbtn : '';
    model.ParallaxScroolingSectionimage = content.ParallaxScroolingSectionimage ? content.ParallaxScroolingSectionimage.file.url : null;

    /* parallax SectionHeight  */
    model.sectionHeight = content.sectionHeight ? content.sectionHeight : '';

     /* parallax SectionHeight  */

    if (content.parallaxSection === 'sectionParallax') {
        model.parallaxSection = 'section-background';
    } else if (content.parallaxSection === 'noParallax') {
        model.parallaxSection = 'sectionFixed';
    }

    /* parallax text Alignment  */
    if (content.textAlignment === 'left') {
        model.textAlignment = 'text-align-left';
    } else if (content.textAlignment === 'right') {
        model.textAlignment = 'text-align-right';
    } else if (content.textAlignment === 'center') {
        model.textAlignment = 'text-align-center';
    }

    /* parallax Section Background Color  */

    model.bgComponentColor = 'style="';
    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + '%;';
    }

    if (content.btntextColor) {
        model.bgComponentColor += 'color: ' + content.btntextColor.value + '; ';
    }

    model.bgComponentColor += '"';

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
    model.UILayout += ';"';


    /* Button detail */

    model.bgHeadingColor = content.bgHeadingColor ? content.bgHeadingColor : '';
    model.bgHeadingOpacity = content.bgHeadingOpacity ? content.bgHeadingOpacity : '';
    model.itemHeadingTextColor = content.itemHeadingTextColor ? content.itemHeadingTextColor : '';
    model.itemHeadingBorderColor = content.itemHeadingBorderColor ? content.itemHeadingBorderColor : '';

    return new Template('experience/components/pd_assets/pdPlusParallaxScrolling').render(model).text;
};
