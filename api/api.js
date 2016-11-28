var faker = require('faker');
var generator = require('./generatorApi');

var obj = {
    firstName: faker.name.firstName,
    lastName: faker.name.firstName,
    age: faker.random.number,
    phoneNumber: faker.phone.phoneNumberFormat,
    photos: faker.image.imageUrl,
    address: faker.address.country,
    fakeArr: [
        faker.phone.phoneNumberFormat,
        faker.image.imageUrl,
        'faker.address.country',
        5225,
        {
            phoneNumber: faker.phone.phoneNumberFormat,
            photos: faker.image.imageUrl,
            addres: 'faker.address.country',
            number: 3131
        }
    ]
};

var api = generator('customers', obj, 40);

module.exports = api;
