/**
 * save new user
 * Get all clothes
 * Update wardrobe
 * Delete clothes
 * Get outfit
 */

const fs = require('fs');
const {v4: uuid} = require('uuid');


//SAVE NEW USER
exports.saveUser = async (username, password) => {
    const user = {
        "id": uuid(),
        "username": `${username}`,
        "password": `${password}`
    };

    const userData = JSON.stringify(user);

    await fs.writeFileSync(`./Database/${username}.json`, userData, (err) => {
        if (err) {
            return false;
        } else {
            console.log('User saved successfully');
            return true;
        }
    });
};


// GET ALL CLOTHES
exports.seeClothes = () => {
    console.log('coming soon');
};


// UPDATE WARDROBE
exports.addClothes = (username) => {
    console.log('coming soon');
};


// DELETE CLOTHES
exports.deleteClothes = (username) => {
    console.log('coming soon');
};


// GET OUTFIT
exports.generate = (username) => {
    console.log('coming soon');
};