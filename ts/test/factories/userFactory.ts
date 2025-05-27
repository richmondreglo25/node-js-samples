export const userFactory = (overrides = {}) => ({
    firstname: 'John',
    lastname: 'Doe',
    nickname: 'johnd',
    email: 'john@example.com',
    status: true,
    ...overrides, // Allow overriding default values
});