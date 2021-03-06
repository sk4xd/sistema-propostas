import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, username, email, cellphone, "phoneNumber", password, location, "isAdmin", created_at ) 
      values('${id}', 'admin', 'admin','admin@propostas.com.br', '', '','${password}', 'brasil', true, 'now()')
    `
  );

  await connection.close();
}

create().then(() => console.log("User admin created!"));
