/**
 * write a function that welcomes the user
 * write a login function
 * write a register function
 */
const controllers = require('./Controllers/clothController');
const verify = require('./verification');
const pc = require('prompt-sync');
const prompt = pc();


// START
const initialize = () => {
    let haveAccount = prompt("Welcome, Do you have an account with us? (1)Yes (2)No: ")

    if (haveAccount) {
        if (haveAccount == 1) {
            login();
        } else if (haveAccount == 2) {
            register();
        }
    } else {
        console.log('Please select option 1 or 2');
        initialize();
    }
    
};


//REGISTER
const register = () => {
    const username = prompt("Create a username for yourself: ");
    const password = prompt("Create a password for yourself: ");

    if (username) {
        if (password) {
            let isUserSaved = controllers.saveUser(username, password);

            if (isUserSaved = true) {
                console.log('Registration successful');
                login();
            } else {
                console.log('Registration failed');
                register();
            }
        } else {
            console.log('Password is required');
        }
    } else {
        console.log('Username is required');
    }

};


// LOGIN
const login = () => {
    console.log('==============LOGIN===============');
    const username = prompt('Enter your username: ');
    const password = prompt('Enter your password: ');

    if (username) {
        if (password) {
            let loginSuccess = verify.isUserValid(username, password);
            if (loginSuccess == true) {
                wardrobeOptions();
            } else {
                console.log('Invalid username or password');
                login();
            }
        }else {
            console.log('Password is required');
            login();
        }
    } else {
        console.log('Username is required');
        login();
    }

};


// WARDROBE OPTIONS
const wardrobeOptions = async () => {
    console.log('===========OPTIONS============')
    console.log('(1) Generate outfit');
    console.log('(2) Add new clothes to wardrobe');
    console.log('(3) See all clothes');
    console.log('(4) Remove cloth from wardrobe');
    console.log('(5) Exit')

    const options = prompt('What would you like to do? ')

    if (options == 1) {
        generate();
    } else if (options == 2) {
        await controllers.addTops();
    } else if (options == 3) {
        seeClothes();
    } else if (options == 4) {
        deleteClothes();
    } else if (options == 5) {
        login();
    } else {
        console.log('Invalid option selected');
        wardrobeOptions();
    }
};

initialize();