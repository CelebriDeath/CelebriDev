'use strict';
var Chance = require('chance'),
    chance = new Chance();


module.exports = function (app) {
    app.constant('profileData', {
        allProfiles: getProfles(),
        pictureUrls: ['http://cbsnews2.cbsistatic.com/hub/i/r/2012/08/04/cf0ca64d-8bb7-11e2-9400-029118418759/thumbnail/620x350/61a7a4e9a47c3a5735fc4ef6502a2ac6/AP149600404504.jpg',
            'http://img3.rnkr-static.com/list_img/14975/1694975/full/famous-people-who-had-twins-who-died-u2.jpg',
            'http://s.hswstatic.com/gif/59-famous-people-who-died-before-40-2.jpg',
            'http://web-images.chacha.com/images/Gallery/7182/how-famous-people-almost-died-1042332178-jul-3-2014-1-600x450.jpg',
            'http://www.cancer-research-awareness.com/images/DinahShore.jpg'
        ]
    });
};

function getProfles() {
    var numberOfProfile = 20;
    var output = [];
    for (var i = 0; i < numberOfProfile; i++) {
        output.push(getRandomProfile());
    }
    return output;
}
function getRandomProfile () {
    return {
        moniker: chance.string({length: 5}),
        category1: chance.string({length: 6}),
        category2: chance.string({length: 5}),
        category3: chance.string({length: 5}),
        lastName: chance.last(),
        firstName: chance.first(),
        middleName: chance.string({length: 2}).toUpperCase(),
        suffix: chance.suffix(),
        birth: chance.birthday({string: true}),
        death: chance.birthday({string: true}),
        age: chance.age(),
        bio: chance.paragraph({sentences: 3}),
        photoLink: chance.url(),
        burialCoords: chance.coordinates(),
        burialAddy: chance.address(),
        burialCity: chance.city(),
        burialState: chance.state(),
        burialZIP: chance.zip(),
        burialCountry: chance.country(),
        burialFacility: chance.sentence({words: 5}),
        howDied: chance.string({length: 5})
    }
}