import { Customer } from "@modules/customers/infra/entities/Customer";
import { Institute } from "../infra/typeorm/entities/Institute";
import { Status } from "../infra/typeorm/entities/Status";

interface ICreateProposalDTO {
  id?: number;
  contract_type: string;
  operation_data: string;
  final_value?: string;
  fee?: string;
  comission_value?: string;
  comission_percentage?: string;
  contract_status: number;
  contract_upload?: string;
  contract_description?: string;
  user_id: string;
  institute_id: string;
  status_id: number;
  customer_id: string;
}

export { ICreateProposalDTO };
