interface ICreateCustomerDTO {
  id?: string;
  name: string;
  birthDate: string;
  identity: string;
  identityExpedition: string;
  cpfCnpj: string;
  mothersName: string;
  fathersName: string;
  civilState: string;
  partnersName: string;
  partnersCPF: string;
  cellphone: string;
  phoneNumber: string;
  cep: string;
  address: string;
  number: string;
  district: string;
  city: string;
  state: string;
  complement: string;
  firstReferralName: string;
  firstReferralPhone: string;
  secondReferralName: string;
  secondReferralPhone: string;
  job: string;
  placeOfBirth: string;
  ownHouse: string;
  email: string;
  observation: string;
}

export { ICreateCustomerDTO };
