import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("customers")
class Customer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birthDate: string;

  @Column()
  identityExpedition: string;

  @Column()
  identity: string;

  @Column()
  cpfCnpj: string;

  @Column()
  mothersName: string;

  @Column()
  fathersName: string;

  @Column()
  civilState: string;

  @Column()
  partnersName: string;

  @Column()
  partnersCPF: string
  
  @Column()
  cellphone: string
  
  @Column()
  phoneNumber: string
  
  @Column()
  cep: string
  
  @Column()
  address: string
  
  @Column()
  number: string

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;
  
  @Column()
  complement: string
  
  @Column()
  firstReferralName: string;

  @Column()
  firstReferralPhone: string;

  @Column()
  secondReferralName: string;

  @Column()
  secondReferralPhone: string;

  @Column()
  job: string;

  @Column()
  placeOfBirth: string;

  @Column()
  ownHouse: string;
  
  @Column()
  email: string

  @Column()
  observation: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Customer };
