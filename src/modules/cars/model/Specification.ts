export class Specification {
  id?: string;

  name: string;

  description: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = Math.random().toString().replace(".", "");
    }//@TODO escrever algo
  }
}
