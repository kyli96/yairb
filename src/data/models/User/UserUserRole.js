import DataTypes from 'sequelize';
import sequelize from '../../sequelize';

const UserUserRole = sequelize.define(
  'UserUserRole',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
  },
  {
    underscored: true,
  },
);

UserUserRole.associate = models => {
  UserUserRole.belongsTo(models.User, {
    foreignKey: 'user_id',
  });
  UserUserRole.belongsTo(models.UserRole, {
    foreignKey: 'userrole_id',
  });
};

export default UserUserRole;
