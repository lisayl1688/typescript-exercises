class User {
  private _username: string = '';
  private _email: string = '';
  private _password: string = '';

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    if (value.length >= 6 && value.length <= 20) {
      this._username = value;
    } else {
      console.error('Username must be between 6 and 20 Characters long.');
    }
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    if (value.includes('@') && value.includes('.')) {
      this._email = value;
    } else {
      console.error('Email address must contain @ and a dot.');
    }
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    if (value.length >= 8) {
      this._password = value;
    } else {
      console.error('Password must be at least 8 characters long.');
    }
  }
}
