import DataTypes from 'sequelize';
import sequelize from '../../sequelize';

const UserLogin = sequelize.define(
  'UserLogin',
  {
    name: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
  },
  {
    underscored: true,
  },
);

UserLogin.associate = models => {
  UserLogin.belongsTo(models.User, {
    foreignKey: 'user_id',
  });
};

export default UserLogin;
