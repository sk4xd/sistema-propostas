import { IStatusRepository } from "@modules/proposals/repositories/IStatusRepository";
import { getRepository, Repository } from "typeorm";
import { Status } from "../entities/Status";

class StatusRepository implements IStatusRepository {
  private repository: Repository<Status>;

  constructor() {
    this.repository = getRepository(Status);
  }

  async findAll(): Promise<Status[]> {
    const status = await this.repository.createQueryBuilder()
    .select(["status.id", 
            "status.status_description"
          ])
    .from(Status, "status")
    .getMany()

    return status;
  }
}

export { StatusRepository };

