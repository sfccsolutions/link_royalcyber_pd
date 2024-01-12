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

        /* Border Radius of Buttons if found then concatenate its class name */
        if (content.socialIconsize === 'small') {
            model.socialIconsize = 'small-size';
        } else if (content.socialIconsize === 'medium') {
            model.socialIconsize = 'medium-size';
        } else if (content.socialIconsize === 'large') {
            model.socialIconsize = 'large-size';
        }
     
       model.footerLogo = content.footerLogo ? content.footerLogo.file.url : null;
        model.showSocialLinks = content.showSocialLinks ? content.showSocialLinks : false;
     
       model.socialIcon1Image = content.socialIcon1Image ? content.socialIcon1Image.file.url : null;
       model.socialIcon1Link = content.socialIcon1Link ? content.socialIcon1Link : '';
   
       model.socialIcon2Image = content.socialIcon2Image ? content.socialIcon2Image.file.url : null;
       model.socialIcon2Link = content.socialIcon2Link ? content.socialIcon2Link : '';
    
       model.socialIcon3Image = content.socialIcon3Image ? content.socialIcon3Image.file.url : null;
       model.socialIcon3Link = content.socialIcon3Link ? content.socialIcon3Link : '';
   
       model.socialIcon4Image = content.socialIcon4Image ? content.socialIcon4Image.file.url : null;
       model.socialIcon4Link = content.socialIcon4Link ? content.socialIcon4Link : '';
    
       model.socialIcon5Image = content.socialIcon5Image ? content.socialIcon5Image.file.url : null;
       model.socialIcon5Link = content.socialIcon5Link ? content.socialIcon5Link : '';
   
 

   
     return new Template('experience/components/pd_assets/pdPlusFooterSocialIcons').render(model).text;
};
