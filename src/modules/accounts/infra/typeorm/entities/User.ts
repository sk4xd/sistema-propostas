import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({select: false})
  username: string;

  @Column({select: false})
  email: string;

  @Column({select: false})
  password: string;

  @Column()
  cellphone: string;

  @Column()
  location: string;

  @Column()
  phoneNumber: string;

  @Column({select: false})
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
