import { Request, Response } from "express";
import { container } from "tsyringe";


import { getPage, getPerPage } from "typeorm-pagination";
import { ListAllCustomersUseCase } from "./listAllCustomerUseCase";

class ListAllCustomersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listaAllCustomersUseCase = container.resolve(ListAllCustomersUseCase);
    getPage(request);
    getPerPage(request);

    const customers = await listaAllCustomersUseCase.execute();

    return response.json(customers);
  }
}

export { ListAllCustomersController };