import { v4 as uuidV4 } from 'uuid';

class Category {
  id?: string;
  name!: string;
  description!: string;
  created_At!: Date;

  constructor(/*name: string, description: string*/) {
    // this.id = uuidV4()
    // this.name = name
    // this.description = description
    // this.created_At = new Date()

    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
