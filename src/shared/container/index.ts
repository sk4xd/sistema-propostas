import { container } from "tsyringe";

import "@shared/container/providers";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { CustomersRepository } from "@modules/customers/infra/repositories/CustomersRepository";
import { IProposalsRepository } from "@modules/proposals/repositories/IProposalsRepository";
import { ProposalsRepository } from "@modules/proposals/infra/typeorm/repositories/ProposalsRepository";
import { ProposalUploadsRepository } from "@modules/proposals/infra/typeorm/repositories/ProposalUploadsRepository";
import { IProposalUploadsRepository } from "@modules/proposals/repositories/IProposalUploadsRepository";
import { IInstitutesRepository } from "@modules/proposals/repositories/IInstitutesRepository";
import { InstitutesRepository } from "@modules/proposals/infra/typeorm/repositories/InstitutesRepository";
import { IStatusRepository } from "@modules/proposals/repositories/IStatusRepository";
import { StatusRepository } from "@modules/proposals/infra/typeorm/repositories/StatusRepository";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProposalsRepository>(
  "ProposalsRepository",
  ProposalsRepository
);

container.registerSingleton<ICustomersRepository>(
  "CustomersRepository",
  CustomersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<IProposalUploadsRepository>(
  "ProposalUploadsRepository",
  ProposalUploadsRepository
);

container.registerSingleton<IInstitutesRepository>(
  "InstitutesRepository",
  InstitutesRepository
);

container.registerSingleton<IStatusRepository>(
  "StatusRepository",
  StatusRepository
);
