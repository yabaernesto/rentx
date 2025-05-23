import { v4 as uuidV4 } from 'uuid';
import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  driver_license: string;
  @Column({ default: false })
  isAdmin: boolean;
  @CreateDateColumn()
  created_At: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
