export class ResponseOptions {
  constructor(success = true, message = "", data = null) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
