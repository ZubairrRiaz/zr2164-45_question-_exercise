"use strict";
function describe_city(city, country = 'default country') {
    console.log(`${city} is in ${country};`);
}
describe_city('karachi', 'Pakistan');
describe_city('Moscow', 'Russia');
describe_city('North korea');
