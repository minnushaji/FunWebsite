import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8080/api/bio";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(endpoint) {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
