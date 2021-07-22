export class PersonModelExampleOne {
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public age: number;
  public homeTown: string;
  constructor() {
    this.firstName = null;
    this.lastName = null;
    this.age = null;
    this.dateOfBirth = null;
    this.homeTown = null;
  }
}

export class PersonModelExampleTwo {
  constructor(
    public firstName: string = null,
    public lastName: string = null,
    public dateOfBirth: Date = null,
    public age: number = null,
    public homeTown: string = null
  ) {}
}

interface IPerson {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  age: number;
  homeTown: string;
}

export class PersonModelExampleThree implements IPerson {
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public age: number;
  public homeTown: string;
  constructor(newPerson: IPerson) {
    Object.keys(newPerson).forEach(key => (this[key] = newPerson[key]));
  }
}
