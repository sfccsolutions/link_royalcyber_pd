'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
// var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');
/**
 * Render logic for the storefront.photoTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    model.editorProps = 'style="';
    if (content.headingTxtColor) {
        model.editorProps += 'color:' + content.richTextContentColor.value + '; ';
    }

    if (content.maxWidth) {
        model.editorProps += 'max-width: ' + content.maxWidth + '; ';
    }
    model.editorProps += '"';

    model.headingTextProps = 'style="';
    if (content.headingTxtColor) {
        model.headingTextProps += 'color:' + content.headingTxtColor.value + '; ';
    }
    model.headingTextProps += '"';

    model.headingText = content.headingText ? content.headingText : null;
    model.richText = content.richText ? content.richText : null;
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : '';

    if (content.textShadow === 'Text White Shadow') {
        model.textShadow = 'txt-white-shadow';
    } else if (content.textShadow === 'Text Black Shadow') {
        model.textShadow = 'txt-black-shadow';
    }

    /* vertical Position of text Container if found then concatenate its Class Name */
    if (content.textAlignmentVertical === 'top') {
        model.textAlignmentVertical = 'start';
    } else if (content.textAlignmentVertical === 'center') {
        model.textAlignmentVertical = 'center';
    } else if (content.textAlignmentVertical === 'bottom') {
        model.textAlignmentVertical = 'end';
    }

    /* Horizontal Position of text Container if found then concatenate its Class Name */
    if (content.textAlignmentHorizontal === 'left') {
        model.textAlignmentHorizontal = 'start';
    } else if (content.textAlignmentHorizontal === 'center') {
        model.textAlignmentHorizontal = 'center';
    } else if (content.textAlignmentHorizontal === 'right') {
        model.textAlignmentHorizontal = 'end';
    }

    /*Add Laxes Animation and its Class Name */
    if (content.AnimationLax === 'Animate Image') {
        model.AnimationLax = 'animate-img';
    } else if (content.AnimationLax === 'Column Animate Up') {
        model.AnimationLax = 'col-animate-up';
    } else if (content.AnimationLax === 'Column Animate Down') {
        model.AnimationLax = 'col-animate-down';
    }
    
    model.BGImageProperties = 'style="';
    if (content.backgroundImage) {
        model.BGImageProperties += 'background-image: url(' + content.backgroundImage.file.url + ');';
    }

    if (content.bgGradiant) {
        model.BGImageProperties += 'background-image: ' + content.bgGradiant + '; ';
    }

    if (content.sectionHeight) {
        model.BGImageProperties += 'min-height: ' + content.sectionHeight + '; ';
    }
    
    if (content.backgroundColor) {
        model.BGImageProperties += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.BGImageProperties += 'opacity: ' + content.backgroundColorAlpha + '%' + ';';
    }

    if (content.setPaddingTop) {
        model.BGImageProperties += 'padding-top: ' + content.setPaddingTop + '; ';
    }

    if (content.setPaddingRight) {
        model.BGImageProperties += 'padding-right: ' + content.setPaddingRight + '; ';
    }

    if (content.setPaddingBottom) {
        model.BGImageProperties += 'padding-bottom: ' + content.setPaddingBottom + '; ';
    }

    if (content.setPaddingLeft) {
        model.BGImageProperties += 'padding-left: ' + content.setPaddingLeft + '; ';
    }

    model.BGImageProperties += '"';

    return new Template('experience/components/pd_assets/pdPlusTwoColBox').render(model).text;
};
