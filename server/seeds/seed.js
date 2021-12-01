const db = require('../config/connection');
const { Tech } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});



{[
  "_id": "",
  "name": "Vincent Sullivan",
  "updatedAt": "2021-03-28T14:37:16.861Z",
  "createdAt": "2021-04-06T15:32:10.647Z",
  "password": "something",
  "username": "example",
  "email": "example@yahoo.com"
]},