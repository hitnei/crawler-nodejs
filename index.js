var request = require('request');
var cheerio = require('cheerio');

request('http://motphimmoi.net/', (err, res, body) => {
    if (err) console.log(`Err: ${err}`);
    else {
        var $ = cheerio.load(body)

        $('#halim-ajax-popular-post .item').each(function () {
            var imgUrl = $(this).find('.item-link img').attr('src').trim();
            var title = $(this).find('.title').text().trim();

            console.log(`Title: ${title}`)
            console.log(`imgUrl: ${imgUrl}`)
        })
    }

})