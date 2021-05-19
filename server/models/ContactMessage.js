const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ContactMessage', {
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      primaryKey: true
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ContactMessage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "firstName", length: 50 },
          { name: "lastName", length: 50 },
          { name: "email", length: 50 },
          { name: "company", length: 50 },
          { name: "phone", length: 50 },
          { name: "message", length: 100 },
        ]
      },
    ]
  });
};
