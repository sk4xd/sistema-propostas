import { Status } from "../infra/typeorm/entities/Status";


interface IStatusRepository {
  findAll(): Promise<Status[]>;
}

export { IStatusRepository };

