const request = require("request-promise");
const cheerio = require("cheerio");

async function main() {
    const result = await request.get("https://gmod-servers.com/server/159216/");
    const $ = cheerio.load(result);
    $("body > div.content > div > div:nth-child(4) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong").each((index, element) => {
        console.log($(element).text())
    });
    $("body > div.content > div > div:nth-child(4) > div > div:nth-child(6) > div > div").each((index, element) => {
        console.log($(element).text())
    });

}

main();