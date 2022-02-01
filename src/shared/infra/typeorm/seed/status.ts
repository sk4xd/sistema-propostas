import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection();

  await connection.query(
    `INSERT INTO STATUS(id, status_description) 
    VALUES  (1, 'Nova'),
            (2, 'Pendente'),
            (3, 'Em Andamento'),
            (4, 'Aprovada'),
            (5, 'Reprovada')
    `
  );

  await connection.close();
}

create().then(() => console.log("Statuses created!"));
