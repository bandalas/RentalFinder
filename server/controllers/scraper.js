const cheerio = require('cheerio');
const fetch = require('node-fetch');
const constants = require('./../constants/regex');

const controller = {};

scrapeByUrl = async function(url) {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    console.log($);
    return $;
}

/**
 * @param {Object} website
 * @param {String} city
 */
controller.queryCityFromWebsiteJSON = function(website, city) {
    let query = website.query;
    let regex = new RegExp(constants.START.source + "city" + constants.END.source);

    query = query.replace(regex, city);
    console.log(query);
    // return scrapeByUrl(query);
}


module.exports = controller;