'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusFeaturedBanner component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');
var ProductSearchModel = require('dw/catalog/ProductSearchModel');

/**
 * Render logic for pdPlusFeaturedBanner component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    var productID = content.product && (content.product.ID || content.product.id || content.product);
    var product = null;

    if (productID) {
        var searchModel = new ProductSearchModel();
        searchModel.setSearchPhrase(productID);
        searchModel.setCategoryID('root'); // fallback category
        searchModel.search();

        var searchHits = searchModel.getProductSearchHits();
        if (searchHits && searchHits.hasNext()) {
            var hit = searchHits.next();
            var apiProduct = hit.getProduct();

            if (apiProduct) {
                var priceModel = apiProduct.getPriceModel();
                var price = null;

                if (priceModel) {
                    if (priceModel.getMinPrice() && priceModel.getMaxPrice() &&
                        !priceModel.getMinPrice().equals(priceModel.getMaxPrice())) {
                        price = priceModel.getMinPrice().toFormattedString() + ' - ' +
                            priceModel.getMaxPrice().toFormattedString();
                    } else if (priceModel.getPrice()) {
                        price = priceModel.getPrice().toFormattedString();
                    }
                }

                // 🔹 Get Availability Info
                var availabilityModel = apiProduct.getAvailabilityModel();
                var availabilityStatus = availabilityModel.isInStock() ? 'In Stock' : 'Out of Stock';
                var stockLevel = availabilityModel.getInventoryRecord() ?
                    availabilityModel.getInventoryRecord().getATS().getValue() : null;

                product = {
                    id: apiProduct.getID(),
                    url: URLUtils.url('Product-Show', 'pid', apiProduct.getID()).toString(),
                    name: apiProduct.getName(),
                    price: price,
                    image: apiProduct.getImage('small', 0) ?
                        apiProduct.getImage('small', 0).getAbsURL().toString() : '',
                    category: apiProduct.getPrimaryCategory() ?
                        apiProduct.getPrimaryCategory().getDisplayName() : '',
                    brand: apiProduct.getBrand(),
                    availability: availabilityStatus,
                    stock: stockLevel !== null ? stockLevel : 'N/A'
                };
            }
        }
    }

    if (product) {
        model.product = product;
        model.display = {
            swatches: true,
            ratings: content.displayRatings || false
        };
        model.urls = {
            product: URLUtils.url('Product-Show', 'pid', product.id).toString()
        };
    } else {
        model.product = null;
        model.urls = {};
    }


    return new Template('experience/components/pd_assets/pdPlusFeaturedBanner').render(model).text;
};