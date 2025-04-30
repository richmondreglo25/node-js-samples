const getUser = () => {
    return {
        firstName: 'Richmonde',
        lastName: 'Regloes',
        status: 'A'
    };
}

const getUser2 = () => {
    return {
        firstName: 'Richmonde 2',
        lastName: 'Regloes',
        status: 'A'
    };
}

// Need to be exported manually.
export const getUserAlias = () => "Toby";

// Export defaults.
export default {
    getUser,
    getUser2
}

// Old implementation.
// // Optional.
// exports = module.exports;

// // Indirect export.

// var getUser = () => {
//     return {
//         firstName: 'Richmond',
//         lastName: 'Reglo',
//         status: 'A'
//     };
// }

// exports.getUser = getUser;

// // Direct export.

// exports.getUser2 = () => {
//     return {
//         firstName: 'Richmond 2',
//         lastName: 'Reglo',
//         status: 'A'
//     };
// }

// // Multiple exports

// /*
// module.exports = {
//     getUser,
//     getUser2
// }
// */