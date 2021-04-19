import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSettings(reqUrl: string): Observable<any> {
    const endpoint = environment.SETTINGS_ENDPOINT + reqUrl;
    return this.http.get(endpoint);
  }

}
