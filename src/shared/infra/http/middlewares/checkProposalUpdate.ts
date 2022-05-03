import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

export async function checkProposalUpdate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  const proposal = request.body;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if((proposal.status_id !== 1 && proposal.status_id !== 2) && !user.isAdmin) {
    throw new AppError("User is not allowed to update this contract, check with your admin.");
  }

  if((proposal.comission_percentage !== null || 
    proposal.comission_value !== null || 
    proposal.fee !== null || 
    proposal.final_value !== null) && !user.isAdmin 
    ) {
      throw new AppError("User is not allowed to update this field.");
    }

  return next();
}
