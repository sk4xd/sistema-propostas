import { Customer } from "@modules/customers/infra/entities/Customer";
import { Institute } from "../infra/typeorm/entities/Institute";

interface IProposalResponseDTO {
  id: number;
  contract_type: string;
  operation_data: string;
  status_proposta: string;
  final_value: string;
  fee: string;
  comission_value: string;
  comission_percentage: string;
  contract_status: string;
  contract_upload: string;
  contract_description: string;
  user_id: string;
  institute: Institute;
  status_id: string;
  customer: Customer;
  contract_url(): string;
}

export { IProposalResponseDTO };
