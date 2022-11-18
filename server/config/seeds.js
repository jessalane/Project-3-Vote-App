const db = require('./connection');
const { User, Polls, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Ugliest Sweater' },
    { name: 'Prettiest Sweater' },
    { name: 'Most Festive Sweater' },
  ]);

  console.log('categories seeded');

  await Polls.deleteMany();

  const polls = await Polls.insertMany([
    {
      name: 'Ugliest Sweater',
      description:
        'Vote for the ugliest sweater!.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
    },
    {
      name: 'Prettiest Sweater',
      description:
        'Vote for the moron that forgot it was an ugly sweater party',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
    },
    {
      name: 'Most Festive Sweater',
      category: categories[1]._id,
      description:
     'Festivus for the rest of us.',
      image: 'toilet-paper.jpg',
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Same',
    lastName: 'Wise',
    email: 'Gamgee@oftheShirel.com',
    password: 'iCantCarryTheRingMrFrodoButICanCarryYou!CC=D',
    orders: [
      {
        products: [polls[0]._id, polls[0]._id, polls[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Wood',
    email: 'Frodo@theOneRing.com',
    password: 'iLoveHobbitGardeners69420'
  });

  console.log('users seeded');

  process.exit();
});
