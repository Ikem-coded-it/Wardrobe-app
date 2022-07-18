/**
 * save new user
 * Get all clothes
 * Update wardrobe
 * Delete clothes
 * Get outfit
 */
const pc = require('prompt-sync');
const prompt = pc();

const fs = require('fs');
const path = require('path');
const {v4: uuid} = require('uuid');


//SAVE NEW USER
exports.saveUser = async (username, password) => {
    const user = [{
        "id": uuid(),
        "username": `${username}`,
        "password": `${password}`
    },];

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
exports.addTops = async () => {
    const username = prompt('Please enter your username: ');
    console.log('======Add tops to your wardrobe======');

    // ADD TOPS TO YOUR WARDROBE
    console.log("Please enter the type of top you have and it's colour, eg Black Sweater");
    const top1 = prompt('1: ');
    const top2 = prompt('2: ');
    const top3 = prompt('3: ');
    const top4 = prompt('4: ');

    try {
        const tops = {"tops":[`${top1}`, `${top2}`, `${top3}`, `${top4}`],}; // model for new content
         
        const data = fs.readFileSync(`./Database/${username}.json`); // retrieve contents of users file in json string
         
        const jsonData = JSON.parse(data);// Convert what was retrieved from string to JSON
         
        jsonData.push(tops); // add new content to retrieved content
         
        const newStringData = JSON.stringify(jsonData); // convert everything back to string
         
        await add(username, newStringData); // save back to the users file

        console.log('Tops have been added to your wardrobe');
        addBottoms(username);
        return true;
         
    } catch (error) {
        console.error(error);
        return false; 
    }
    //addBottoms(username);
};


const addBottoms = async (username) => {
    //const username = prompt('Please enter your username: ');
    console.log('=========Add lower body clothes to your wardrobe=========');

    // ADD LOWER BODY CLOTHES SUCH AS TROUSERS AND SHORTS
    console.log("Please enter the type of lower body clothes you have and it's colour, eg Blue jeans");
    const bottom1 = prompt('1: ');
    const bottom2 = prompt('2: ');
    const bottom3 = prompt('3: ');
    const bottom4 = prompt('4: ');

    try {
        const bottoms = {"bottoms":[`${bottom1}`, `${bottom2}`, `${bottom3}`, `${bottom4}`],}; 
        
        const data = fs.readFileSync(`./Database/${username}.json`); 
        
        const jsonData = JSON.parse(data); 
        
        jsonData.push(bottoms); 
        
        const newStringData = JSON.stringify(jsonData); 
        
        await add(username, newStringData); 

        console.log('lower body clothes have been added to your wardrobe')

        addFootWear(username);
        
    } catch (error) {
        console.error(error); 
    }
};


const addFootWear = async (username) => {
    //const username = prompt('Please enter your username: ');
    console.log('=========Add Footwear to your wardrobe=========');

    // ADD FOOT WEAR SUCH AS SHOES AND SLIDES
    console.log("Please enter the type of footwear you have and it's colour, eg White sneakers");
    const foot1 = prompt('1: ');
    const foot2 = prompt('2: ');
    const foot3 = prompt('3: ');
    const foot4 = prompt('4: ');

    try {
        const footwear = {"Foot Wear":[`${foot1}`, `${foot2}`, `${foot3}`, `${foot4}`],};
        
        const data = fs.readFileSync(`./Database/${username}.json`);
        
        const jsonData = JSON.parse(data);
        
        jsonData.push(footwear);
        
        const newStringData = JSON.stringify(jsonData);
        
        await add(username, newStringData);

        console.log('Foot wear has been added to your wardrobe')

        addAccessory(username);
        
    } catch (error) {
        console.error(error); 
    }
};


const addAccessory = async(username) => {
    //const username = prompt('Please enter your username: ');
    console.log('=========Add accessories to your wardrobe=========');

    // ADD ACCESSORIES SUCH AS WATCHES AND BRACELETS
    console.log("Please enter the accessories you have and it's colour, eg red bracelet");
    const accessory1 = prompt('1: ');
    const accessory2 = prompt('2: ');
    const accessory3 = prompt('3: ');
    const accessory4 = prompt('4: ');

    try {
        const accessories = {"accessories":[`${accessory1}`, `${accessory2}`, `${accessory3}`, `${accessory4}`],};
        
        const data = fs.readFileSync(`./Database/${username}.json`);
        
        const jsonData = JSON.parse(data);
        
        jsonData.push(accessories);
        
        const newStringData = JSON.stringify(jsonData);
        
        await add(username, newStringData);

        console.log('Accessories have been added to your wardrobe');


        
    } catch (error) {
        console.error(error); 
    }
}


const add =  async (username, newStringData) => {
    await fs.promises.writeFile(`./Database/${username}.json`, newStringData, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('Wardrobe has been updated');
        }
    })
};

// DELETE CLOTHES
exports.deleteClothes = (username) => {
    console.log('coming soon');
};


// GET OUTFIT
exports.generate = () => {
    const username = prompt('Please enter your username: ');

    const data = fs.readFileSync(`./Database/${username}.json`);
};