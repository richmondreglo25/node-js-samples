// Create seeder file.
npx sequelize-cli seed:generate --name userSeeder

// Running seeds.
sequelize init
npx sequelize-cli db:seed:all

// Undoing Seeds
sequelize init
npx sequelize-cli db:seed:undo
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
npx sequelize-cli db:seed:undo:all

// Migration
npx sequelize-cli migration:generate --name migration-skeleton