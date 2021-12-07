const sequelize = require('../config/connection');
const seedOrder = require('./orderData.js');
const seedItem = require('./itemData.js');
const seedUser = require('./userData.js')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedOrder();

  await seedItem();

  await seedUser();

  process.exit(0);
};

seedAll();
