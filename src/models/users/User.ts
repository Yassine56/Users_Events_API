import BaseEntity from '../BaseEntity';

export default class User extends BaseEntity {
  public password: string;
  public email: string;
  public phone_number: string;

  constructor(entityValues: Partial<User>) {
    super(entityValues);
    Object.assign(this, entityValues);
  }
}
