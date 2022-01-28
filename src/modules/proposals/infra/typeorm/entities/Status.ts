import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("status")
class Status {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  status_description: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Status };

