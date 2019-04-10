export class APIRequest {
  static readonly URL_PREFIX: string = '/api';

  static get(url: string): Promise<any> {
    return fetch(this.URL_PREFIX + url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .catch(error => error);
  }

  static post(url: string, data: object = {}): Promise<any> {
    return fetch(this.URL_PREFIX + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(error => error);
  }

  static put(url: string, data: object = {}): Promise<any> {
    return fetch(this.URL_PREFIX + url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(error => error);
  }

  static delete(url: string, data: object = {}): Promise<any> {
    return fetch(this.URL_PREFIX + url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(error => error);
  }
}
