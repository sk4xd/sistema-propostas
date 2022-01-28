import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-access-token"] ||
      request.query.token ||
      request.headers.cookie.split("=")[1];

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    const refresh_token = await refreshTokenUseCase.execute(token);

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 7*24*60*60*1000)
  };

  return response
  .cookie('refreshToken', refresh_token.refresh_token, cookieOptions)
  .json(refresh_token);
  }
}

export { RefreshTokenController };
