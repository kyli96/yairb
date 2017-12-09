import DataTypes from 'sequelize';
import sequelize from '../../sequelize';

const UserClaim = sequelize.define(
  'UserClaim',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    type: { type: DataTypes.STRING },
    value: { type: DataTypes.STRING },
  },
  {
    underscored: true,
  },
);

UserClaim.associate = models => {
  UserClaim.belongsTo(models.User, {
    foreignKey: 'user_id',
  });
};

export default UserClaim;
