import { getRepository, Repository } from "typeorm";


import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { Customer } from "../entities/Customer";
import { ICreateCustomerDTO } from "@modules/customers/dtos/ICreateCustomerDTO";

class CustomersRepository implements ICustomersRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }

  async create(customer: ICreateCustomerDTO): Promise<void> {
    const customerSave = this.repository.create(customer);

    await this.repository.save(customerSave);
  }

  async findByCpf(cpfCnpj: string): Promise<Customer> {
    const customer = await this.repository.findOne({ cpfCnpj });
    return customer;
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.repository.findOne(id);
    return customer;
  }

  async findAll(): Promise<PaginationAwareObject> {
    const users = await this.repository.createQueryBuilder()
    .select([
    "customer.id", 
    "customer.name", 
    "customer.birthDate", 
    "customer.cpfCnpj",
    "customer.identity",
    "customer.identityExpedition",
    "customer.mothersName", 
    "customer.fathersName", 
    "customer.civilState",
    "customer.partnersName",
    "customer.partnersCPF",
    "customer.cellphone",
    "customer.phoneNumber",
    "customer.cep",
    "customer.address",
    "customer.number",
    "customer.district",
    "customer.city",
    "customer.state",
    "customer.complement",
    "customer.firstReferralName",
    "customer.firstReferralPhone",
    "customer.secondReferralName",
    "customer.secondReferralPhone",
    "customer.job",
    "customer.placeOfBirth",
    "customer.ownHouse",
    "customer.email",
    "customer.observation",
    "customer.updated_at",
  ])
    .from(Customer, "customer")
    .paginate();

    return users;
  }

  async update({
    id,
    name, 
    birthDate, 
    cpfCnpj,
    mothersName, 
    fathersName, 
    civilState,
    partnersName,
    partnersCPF,
    cellphone,
    phoneNumber,
    cep,
    address,
    number,
    district,
    city,
    state,
    complement,
    firstReferralName,
    firstReferralPhone,
    secondReferralName,
    secondReferralPhone,
    job,
    placeOfBirth,
    ownHouse,
    email,
    observation,
    identity,
    identityExpedition
  }): Promise<void> {
  await this.repository.update(id, {
    name, 
    birthDate, 
    cpfCnpj,
    fathersName,
    mothersName, 
    civilState,
    partnersName,
    partnersCPF,
    cellphone,
    phoneNumber,
    cep,
    address,
    number,
    district,
    city,
    state,
    complement,
    firstReferralName,
    firstReferralPhone,
    secondReferralName,
    secondReferralPhone,
    job,
    placeOfBirth,
    ownHouse,
    observation,
    email,
    identity,
    identityExpedition
  })
  }
}

export { CustomersRepository };
