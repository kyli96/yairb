import DataTypes from 'sequelize';
import sequelize from '../../sequelize';

const UserRole = sequelize.define(
  'UserRole',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    paranoid: true,
    underscored: true,
  },
);

export default UserRole;
