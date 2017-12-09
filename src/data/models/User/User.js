import DataTypes from 'sequelize';
import crypto from 'crypto';
import sequelize from '../../sequelize';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: {
      type: DataTypes.STRING,
      set(val) {
        const email = this.getDataValue('email');
        const shadow = crypto
          .createHash('md5')
          .update(val.toLowerCase() + email)
          .digest('hex')
          .toUpperCase();
        this.setDataValue('password', shadow);
      },
    },
  },
  {
    paranoid: true,
    underscored: true,
    scopes: {},
  },
);

User.associate = models => {
  User.hasMany(models.UserLogin, {
    foreignKey: 'user_id',
    as: 'logins',
  });
  User.hasMany(models.UserClaim, {
    foreignKey: 'user_id',
    as: 'claims',
  });
  User.hasOne(models.UserProfile, {
    foreignKey: 'user_id',
    as: 'profile',
  });
  User.belongsToMany(models.UserRole, {
    through: { model: models.UserUserRole, unique: false },
    foreignKey: 'user_id',
    otherKey: 'userrole_id',
    unique: false,
    constraints: false,
  });
};

export default User;
