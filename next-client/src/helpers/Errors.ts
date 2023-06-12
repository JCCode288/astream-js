export default class Errors extends Error {
  public status: number;
  public errorMessage: { message: string };

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.errorMessage = { message };
  }
}
