interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  username: string;
  phoneNumber?: string;
  cellphone?: string;
  location?: string;
  id?: string;
}

export { ICreateUserDTO };
