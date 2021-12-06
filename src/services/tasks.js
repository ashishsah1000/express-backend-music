import httpService from "./http";
export default class tasksService {
  constructor() {
    this.url = tasksService.url + "/a/";
    this.http = new httpService();

    console.log("task created with ", this.url);
  }

  getData() {
    console.log("calling getData");
    return this.http.get(`${this.url}/focus`);
  }

  submitFocus(data) {
    console.log("submitting focus");
    return this.http.post(`${this.url}/focus`, data);
  }
}
