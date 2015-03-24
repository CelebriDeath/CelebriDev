'use strict';
var Chance = require('chance'),
    chance = new Chance();


module.exports = function (app) {
    app.constant('profileData', {
        allProfiles: getProfles()
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
        middleName: chance.string({length: 3}),
        suffix: chance.suffix(),
        birth: chance.birthday({string: true}),
        death: chance.string({length: 5}),
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