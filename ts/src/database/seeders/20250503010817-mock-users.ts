import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
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
      nickname: 'Baduday',
      email: 'ericka@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {});
  }
};
