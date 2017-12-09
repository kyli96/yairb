import DataTypes from 'sequelize';
import sequelize from '../../sequelize';

const UserProfile = sequelize.define(
  'UserProfile',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    displayName: {
      type: DataTypes.STRING(100),
    },
    picture: {
      type: DataTypes.STRING(255),
    },
    gender: {
      type: DataTypes.STRING(50),
    },
    location: {
      type: DataTypes.STRING(100),
    },
    website: {
      type: DataTypes.STRING(255),
    },
  },
  {
    paranoid: true,
    underscored: true,
  },
);

UserProfile.associate = models => {
  UserProfile.belongsTo(models.User, {
    foreignKey: 'user_id',
  });
};

export default UserProfile;
