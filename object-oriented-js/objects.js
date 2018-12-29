/*//Part-1
//create user 1
var userOneEmail = 'user1@gmail.com';
var userOneName = 'UserOne';
var userOneFriends = ['UserTwo'];

//create user 2
var userTwoEmail = 'user2@gmail.com';
var userTwoName = 'UserTwo';
var userTwoFriends = ['UserOne', 'UserThree'];

//create user 3
var userThreeEmail = 'user3@gmail.com';
var userThreeName = 'UserThree';
var userThreeFriends = ['UserTwo'];

function login(email) {
    console.log(email, 'is now online.');
}

function logout(email) {
    console.log(email, 'has logged out.');
}

login(userOneEmail);*/

/* //Part-2 - Encapsulation 
var userOne = {
    email: 'user1@gmail.com',
    name: 'UserOne',
    login(){
        console.log(this.email, 'has logged in.');
    },
    logout(){
        console.log(this.email, 'has logged out.');
    }

};

console.log(userOne.email); */


/* //Part-3 - class and new keyword
class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }

    login(){
        console.log(this.email, 'just logged in');
    }

    logout(){
        console.log(this.email, 'just logged out');
    }
}

//The 'new' keyword
// - creates a new empty object{}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
var userOne = new User('user1@gmail.com','userOne');
var userTwo = new User('user2@gmail.com','userTwo');

userOne.login();
userTwo.logout(); */

/* //Part-4 - Method Chaining
class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.email, 'just logged in');
        return this;
    }

    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }

    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

var userOne = new User('user1@gmail.com','userOne');
var userTwo = new User('user2@gmail.com','userTwo');

userOne.login().updateScore().updateScore().logout(); */

/* //Part-5 - Inhritance
class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.email, 'just logged in');
        return this;
    }

    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }

    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}

var userOne = new User('user1@gmail.com','UserOne');
var userTwo = new User('user2@gmail.com','UserTwo');
var admin = new Admin('userAdmin@gmail.com','UserAdmin');

var users = [userOne, userTwo];

admin.deleteUser(userTwo);
console.log(users); */

/* //Part-6 - Constructors
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in.');
    }
}

var userOne = new User('user1@gmail.com','UserOne');
var userTwo = new User('user2@gmail.com','UserTwo');

console.log(userOne);
userTwo.login(); */

/* //Part-7 - Prototype
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in.');
}

User.prototype.logout = function(){
    this.online = true;
    console.log(this.email, 'has logged out.');
}

var userOne = new User('user1@gmail.com','UserOne');
var userTwo = new User('user2@gmail.com','UserTwo');

console.log(userOne);
userTwo.login(); */

//Part-8 - Prototype Inheritance
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in.');
}

User.prototype.logout = function(){
    this.online = true;
    console.log(this.email, 'has logged out.');
}

function Admin(...args){
    User.apply(this, args);
    this.role = 'admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
}

var userOne = new User('user1@gmail.com','UserOne');
var userTwo = new User('user2@gmail.com','UserTwo');
var admin = new Admin('userAdmin@gmail.com','UserAdmin');

var users = [userOne,userTwo,admin];

console.log(admin);