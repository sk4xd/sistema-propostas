import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import { User } from "../entities/User";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    username,
    phoneNumber,
    cellphone,
    location,
    password,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      username,
      phoneNumber,
      location,
      cellphone,
      password,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmailOrUsername(email: string): Promise<User> {
    const user = await this.repository.createQueryBuilder()
    .select("user")
    .from(User, "user")
    .addSelect("user.isAdmin")
    .addSelect("user.password")
    .where("user.email = :email", {email})
    .orWhere("user.username = :email", {email})
    .getOne();
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.createQueryBuilder()
    .select("user")
    .from(User, "user")
    .addSelect("user.isAdmin")
    .where("user.id = :id", {id})
    .getOne();
  
    return user;
  }

  async findAll(): Promise<PaginationAwareObject> {
    const users = await this.repository.createQueryBuilder()
    .select(["user.id", "user.name", "user.username", "user.email", "user.cellphone", "user.phoneNumber", "user.location", "user.isAdmin"])
    .from(User, "user")
    .paginate();

    return users;
  }

  async update({
    id,
    name,
    email,
    phoneNumber,
    cellphone,
    location,
    password
  }): Promise<void> {
  await this.repository.update(id, {
    name,
    email,
    phoneNumber,
    cellphone,
    location,
    password
  })
  }
}

export { UsersRepository };
