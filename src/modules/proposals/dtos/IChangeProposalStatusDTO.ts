import { Proposal } from "../infra/typeorm/entities/Proposal";

interface IChangeProposalStatusDTO {
  id: string;
  proposal: Proposal;
}

export { IChangeProposalStatusDTO };

