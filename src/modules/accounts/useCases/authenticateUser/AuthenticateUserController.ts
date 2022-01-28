import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({
      password,
      email,
    });

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 7*24*60*60*1000)
  };

    return response
          .cookie('refreshToken', token.refresh_token, cookieOptions)
          .json(token);
  }
}

export { AuthenticateUserController };
