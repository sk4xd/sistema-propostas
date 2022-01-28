import { classToClass } from "class-transformer";
import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";

class UserMap {
  static toDTO({
    email,
    name,
    id,
    username,
    phoneNumber,
    cellphone,
    location,
    isAdmin
  }: User): IUserResponseDTO {
    const user = classToClass({
      email,
      name,
      id,
      username,
      phoneNumber,
      cellphone,
      location,
      isAdmin
    });
    return user;
  }
}

export { UserMap };
