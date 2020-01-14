const cors = require('cors')({ origin: true });
const websites_json = require('./server/websites/websites.json');
const scraper = require('./server/controllers/scraper');

for(let website in websites_json) {
    scraper.queryCityFromWebsiteJSON(websites_json[website],'seattle-wa');
}