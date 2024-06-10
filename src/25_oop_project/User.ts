import IUser from './contracts/IUser';

class User implements IUser {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
}
export default User;
