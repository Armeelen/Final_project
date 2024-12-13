const { DataTypes } = require('sequelize');
const db = require('../database');//connecting the database from database.js


const User = db.define('User',{
   id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
},
username:{
    type:DataTypes.STRING,
    unique:true,
},
password:{
    type:DataTypes.STRING,
    defaultValue: 'user'
}

});

//the orm is a little dumb so we need to tell it sync it
db.sync()
.then(() => {
    console.log('User table created if not already exists.');
})
.catch((error) => {
    console.error('Error creating table:', error);
});


module.exports = User;