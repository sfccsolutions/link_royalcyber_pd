'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusAccordion component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');


/**
 * Render logic for pdPlusAccordions component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();

    model.showCol1Discription = content.showCol1Discription ? content.showCol1Discription : false;
    model.companyDiscription = content.companyDiscription ? content.companyDiscription : null;

    /* Coloumn 1 Social Links  */

    model.showSocialLinks = content.showSocialLinks ? content.showSocialLinks : false;

    model.footerHeading1 = content.footerHeading1;
    model.footerHeading2 = content.footerHeading2;
    model.footerHeading4 = content.footerHeading4;
    model.copyRight = content.copyRight;

    /* Coloumn 2 Links  */
    model.showCol2Links = content.showCol2Links ? content.showCol2Links : false;
    model.col2Link = content.col2Link ? content.col2Link : '';
    model.col2Item1 = content.col2Item1 ? content.col2Item1 : null;
    model.col2Link1 = content.col2Link1 ? content.col2Link1 : null;

    model.col2Item2 = content.col2Item2 ? content.col2Item2 : null;
    model.col2Link2 = content.col2Link2 ? content.col2Link2 : null;

    model.col2Item3 = content.col2Item3 ? content.col2Item3 : null;
    model.col2Link3 = content.col2Link3 ? content.col2Link3 : null;

    model.col2Item4 = content.col2Item4 ? content.col2Item4 : null;
    model.col2Link4 = content.col2Link4 ? content.col2Link4 : null;

    model.col2Item5 = content.col2Item5 ? content.col2Item5 : null;
    model.col2Link5 = content.col2Link5 ? content.col2Link5 : null;

    model.col2Item6 = content.col2Item6 ? content.col2Item6 : null;
    model.col2Link6 = content.col2Link6 ? content.col2Link6 : null;

    model.col2Item7 = content.col2Item7 ? content.col2Item7 : null;
    model.col2Link7 = content.col2Link7 ? content.col2Link7 : null;

    model.col2Item8 = content.col2Item8 ? content.col2Item8 : null;
    model.col2Link8 = content.col2Link8 ? content.col2Link8 : null;

    model.col2Item9 = content.col2Item9 ? content.col2Item9 : null;
    model.col2Link9 = content.col2Link9 ? content.col2Link9 : null;

    model.col2Item10 = content.col2Item10 ? content.col2Item10 : null;
    model.col2Link10 = content.col2Link10 ? content.col2Link10 : null;

    /* Column 3 */

    /* Coloumn 3 Links  */
    model.showCol3Links = content.showCol3Links ? content.showCol3Links : false;
    model.col3Link = content.col3Link ? content.col3Link : '';

    model.col3Item1 = content.col3Item1 ? content.col3Item1 : null;
    model.col3Link1 = content.col3Link1 ? content.col3Link1 : null;

    model.col3Item2 = content.col3Item2 ? content.col3Item2 : null;
    model.col3Link2 = content.col3Link2 ? content.col3Link2 : null;

    model.col3Item3 = content.col3Item3 ? content.col3Item3 : null;
    model.col3Link3 = content.col3Link3 ? content.col3Link3 : null;

    model.col3Item4 = content.col3Item4 ? content.col3Item4 : null;
    model.col3Link4 = content.col3Link4 ? content.col3Link4 : null;

    model.col3Item5 = content.col3Item5 ? content.col3Item5 : null;
    model.col3Link5 = content.col3Link5 ? content.col3Link5 : null;

    model.col3Item6 = content.col3Item6 ? content.col3Item6 : null;
    model.col3Link6 = content.col3Link6 ? content.col3Link6 : null;

    model.col3Item7 = content.col3Item7 ? content.col3Item7 : null;
    model.col3Link7 = content.col3Link7 ? content.col3Link7 : null;

    model.col3Item8 = content.col3Item8 ? content.col3Item8 : null;
    model.col3Link8 = content.col3Link8 ? content.col3Link8 : null;

    model.col3Item9 = content.col3Item9 ? content.col3Item9 : null;
    model.col3Link9 = content.col3Link9 ? content.col3Link9 : null;

    model.col3Item10 = content.col3Item10 ? content.col3Item10 : null;
    model.col3Link10 = content.col3Link10 ? content.col3Link10 : null;

    /* Column 4 Links */
    model.showCol4Links = content.showCol4Links ? content.showCol4Links : false;
    model.col4Link = content.col4Link ? content.col4Link : '';

    model.col4Item1 = content.col4Item1 ? content.col4Item1 : null;
    model.col4Link1 = content.col4Link1 ? content.col4Link1 : null;
    
    model.col4Item2 = content.col4Item2 ? content.col4Item2 : null;
    model.col4Link2 = content.col4Link2 ? content.col4Link2 : null;

    model.col4Item3 = content.col4Item3 ? content.col4Item3 : null;
    model.col4Link3 = content.col4Link3 ? content.col4Link3 : null;

    model.col4Item4 = content.col4Item4 ? content.col4Item4 : null;
    model.col4Link4 = content.col4Link4 ? content.col4Link4 : null;

    model.col4Item5 = content.col4Item5 ? content.col4Item5 : null;
    model.col4Link5 = content.col4Link5 ? content.col4Link5 : null;

    model.col4Item6 = content.col4Item6 ? content.col4Item6 : null;
    model.col4Link6 = content.col4Link6 ? content.col4Link6 : null;

    model.col4Item7 = content.col4Item7 ? content.col4Item7 : null;
    model.col4Link7 = content.col4Link7 ? content.col4Link7 : null;

    model.col4Item8 = content.col4Item8 ? content.col4Item8 : null;
    model.col4Link8 = content.col4Link8 ? content.col4Link8 : null;

    model.col4Item9 = content.col4Item9 ? content.col4Item9 : null;
    model.col4Link9 = content.col4Link9 ? content.col4Link9 : null;

    model.col4Item10 = content.col4Item10 ? content.col4Item10 : null;
    model.col4Link10 = content.col4Link1 ? content.col4Link10 : null;


    model.tileNewtab = content.tileNewtab;
   

    model.bgComponentColor = 'style="';
    if (content.headingtextColor) {
        model.bgComponentColor += 'color: ' + content.headingtextColor.value + '; ';
    }

    model.bgComponentColor += '"';

    model.setTextColor = 'style="';
    if (content.linktextColor) {
        model.setTextColor += 'color: ' + content.linktextColor.value + '; ';
    }

    model.setTextColor += '"';

    /* Margin | Padding Settings */
    
    model.UILayout = 'style="';
    model.UILayout += '; padding-top: ' + (content.setPaddingTop ? content.setPaddingTop : '0');
    model.UILayout += '; padding-right: ' + (content.setPaddingRight ? content.setPaddingRight : '0');
    model.UILayout += '; padding-bottom: ' + (content.setPaddingBottom ? content.setPaddingBottom : '0');
    model.UILayout += '; padding-left: ' + (content.setPaddingLeft ? content.setPaddingLeft : '0');
    model.UILayout += '; margin-top: ' + (content.setMarginTop ? content.setMarginTop : '0');
    model.UILayout += '; margin-right: ' + (content.setMarginRight ? content.setMarginRight : '0');
    model.UILayout += '; margin-bottom: ' + (content.setMarginBottom ? content.setMarginBottom : '0');
    model.UILayout += '; margin-left: ' + (content.setMarginLeft ? content.setMarginLeft : '0');
    
    model.UILayout += ';"';

    return new Template('experience/components/pd_assets/pdPlusFooter').render(model).text;
};
