import BaseEntity from "../BaseEntity";

export default class Event extends BaseEntity {
  public type: string;
  public user_id?: string;

  constructor(entityValues: Partial<Event>) {
    super(entityValues);
    Object.assign(this, entityValues);
  }
}
