
exports.isUserValid = (username, password) => {
    try {
        const data = require(`./Database/${username}.json`);
        if (password == data[0].password) {
        return true;
    }
    } catch (error) {
        console.log('User does not exist');
        return false;
    }
};