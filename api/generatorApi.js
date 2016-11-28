var faker = require('faker');


/**
 *
 * generator function for json-server
 * @param {String} nameApi
 * @param {Object} fakerObject
 * @param {Number} count
 * @returns function
 */
function generator(nameApi, fakerObject, count) {

    return function () {
        var result = {};
        var api = [nameApi];

        var items = [];
        for (var id = 0; id < count; id++) {
            items.push(createItem(fakerObject));
        }
        result[api.join('')] = items;
        return result;

    }
}

function createItem(obj) {
    var tempArray = [];
    var tempObject = {};

    if (Array.isArray(obj)) {
        obj.forEach(function (item, index) {
            if (typeof item == 'function') {
                tempArray.push(item());
            } else if (Array.isArray(item)) {
                tempArray.push(createItem(item));
            } else if (typeof item == 'object') {
                tempArray.push(createItem(item));
            } else {
                tempArray.push(item);
            }
        })
    } else if (typeof obj == "object") {
        Object.keys(obj).forEach(function (item, index) {
            if (typeof obj[item] == 'function') {
                tempObject[item] = obj[item]();
            } else if (Array.isArray(obj[item])) {
                tempObject[item] = createItem(obj[item]);
            } else if (typeof obj[item] == 'object') {
                tempObject[item] = createItem(obj[item]);
            } else {
                tempObject[item] = obj[item];
            }
        })
    }


    if (tempArray.length <= 0) {
        return tempObject;
    } else {
        return tempArray;
    }

}

module.exports = generator;