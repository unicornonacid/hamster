import { APIRequest } from "../../Shared/Infrastructure/APIRequest";

export class Request {
  readonly resource: string = "/test";

  get() {
    return APIRequest.get(this.resource);
  }
}
