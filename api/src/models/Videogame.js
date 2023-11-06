const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el model
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true
      }
    },

    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate:{
        isDate: true, 
      }
    },

    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
      validate: {
        isDecimal: true, 
      }
    },
   
  },
  {timestamps: false}
  );
};
