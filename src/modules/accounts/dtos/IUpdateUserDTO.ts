interface IUpdateUserDTO {
  name?: string;
  password?: string;
  email?: string;
  phoneNumber?: string;
  cellphone?: string;
  location?: string;
  id: string;
  isAdmin: boolean;
}

export { IUpdateUserDTO };
