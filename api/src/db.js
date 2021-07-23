require('dotenv').config();
const { Sequelize, UUIDV4 } = require('sequelize');
/* const { v4: uuidv4 } = require('uuid'); */
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe, Ingredient, User, Comment } = sequelize.models;

/* Recipe.beforeCreate(recipe =>{ recipe.id = UUIDV4() }); */
console.log(sequelize.models)


Recipe.belongsToMany(Ingredient, {through: 'recipe_ingredient'});
Ingredient.belongsToMany(Recipe, {through: 'recipe_ingredient'});
User.belongsToMany(Comment, {through: 'user_comment'});
Comment.belongsTo(User, {through: 'user_comment'});
Ingredient.belongsToMany(Comment, {through: 'ingredient_comment'});
Comment.belongsTo(Ingredient, {through: 'ingredient_comment'});

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};