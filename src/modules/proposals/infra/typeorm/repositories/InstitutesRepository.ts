import { IInstitutesRepository } from "@modules/proposals/repositories/IInstitutesRepository";
import { getRepository, Repository } from "typeorm";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { Institute } from "../entities/Institute";

class InstitutesRepository implements IInstitutesRepository {
  private repository: Repository<Institute>;

  constructor() {
    this.repository = getRepository(Institute);
  }

  async create({
    institute_name
  }: any): Promise<Institute> {
    const institute = this.repository.create({
      institute_name
    });

    await this.repository.save(institute);

    return institute;
  }

  async findAll(): Promise<PaginationAwareObject> {
    const institutes = await this.repository.createQueryBuilder()
    .select(["institute.id", "institute.institute_name"])
    .from(Institute, "institute")
    .paginate();

    return institutes;
  }

  async update({
    id,
    institute_name
  }): Promise<void> {
  await this.repository.update(id, institute_name)
  }
}

export { InstitutesRepository };

