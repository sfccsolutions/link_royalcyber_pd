This is a repository for the Salesforce page designer plus 
# The latest version
This solution is compatible with SFRA is 6.0.0
Your site must be using compatibility mode 17.7 or higher in order for the example page types and component types in this repository to work correctly.


#To enable Page Designer, in Business Manager:

Select Administration > Global Preferences > Feature Switches.
Enable Page Designer beta.
Read and agree to the terms.
Click Apply.

Dependencies to download
------------------------------
This plugin requires SFRA 6.0.0 base cartridge(app_storefront_base) and page designer Plugin Cartridges in order to compile correctly. Please make sure compiled version of both is present in cartridges folders as siblings before compiling page designer plus cartridge. you can use web pack to configure all togather. 

The cartridge code needs following repositories to work. Please download and review their documentation of GitHub regarding installing them by clicking on links below. 

clone and compile .

1-	SFRA version 6.0 (https://github.com/SalesforceCommerceCloud/storefront-reference-architecture/tree/v6.0.0).
2-	page-designer-reference (https://github.com/SalesforceCommerceCloud/page-designer-reference)
.

Install Cartridges
•	Clone or fork this repository.(git@github.com:SalesforceCommerceCloud/link_royalcyberpd.git)
•	Upload module_pagedesigner and bm_pagedesigner to your sandbox.
•	upload app_page_designer_plus to your sandbox.


Cartridge Path Assignment 
------------------------------------
For SFRA site, the cartridge path should look like this: app_page_designer_plus:app_storefront_base:module_pagedesigner

•	Add bm_pagedesigner to the cartridge path of the Business Manager site.
•	Add module_pagedesigner to the end of the cartridge path for your storefront site.
•	Add app_page_designer_plus to the front of the cartridge path for the storefront site.

Final Paths would look something like below. 

•	Site path: app_page_designer_plus:app_storefront_base:module_pagedesigner
•	Business Manager Path : bm_pagedesigner 





## Linting and Compiling your code

Run following commands 

 Run 'npm install' to install all of the local dependencies (node version 8.x or current LTS release recommended) 
 Run 'npm run build' from the command line that would compile all client-side JS and css files


  If you are having an issue compiling scss files, try running 'npm rebuild node-sass' from within your local repo.
  

## Linting your code

`npm run lint` - Execute linting for all JavaScript and SCSS files in the project. You should run this command before committing your code.

Please ensure package.json contains base path variable. update the path to sfra cartridge in order to compile successfully. 















