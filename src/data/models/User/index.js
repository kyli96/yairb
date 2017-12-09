import User from './User';
import UserLogin from './UserLogin';
import UserClaim from './UserClaim';
import UserProfile from './UserProfile';
import UserRole from './UserRole';
import UserUserRole from './UserUserRole';

const models = {
  User,
  UserLogin,
  UserClaim,
  UserProfile,
  UserRole,
  UserUserRole,
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

export { User, UserLogin, UserClaim, UserProfile, UserRole, UserUserRole };
