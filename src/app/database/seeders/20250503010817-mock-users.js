'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      status: true,
      firstname: 'Richmond',
      lastname: 'Reglo',
      nickname: 'rich',
      email: 'richmond@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      status: true,
      firstname: 'Ericka',
      lastname: 'Reglo',
      nickname: 'erick',
      email: 'ericka@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      status: true,
      firstname: 'Carmelina',
      lastname: 'Reglo',
      nickname: 'carm',
      email: 'carmelina@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      status: true,
      firstname: 'John Victor',
      lastname: 'Reglo',
      nickname: 'john',
      email: 'johnvictor@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      status: true,
      firstname: 'Gabriel Rose',
      lastname: 'Reglo',
      nickname: 'gabe',
      email: 'gabrielrose@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
