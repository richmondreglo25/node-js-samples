'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      status: true,
      firstName: 'Richmond',
      lastName: 'Reglo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      status: true,
      firstName: 'Ericka',
      lastName: 'Reglo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      status: true,
      firstName: 'Carmelina',
      lastName: 'Reglo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      status: true,
      firstName: 'John Victor',
      lastName: 'Reglo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      status: true,
      firstName: 'Gabriel Rose',
      lastName: 'Reglo',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
