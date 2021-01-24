import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class HttpBuilder {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url, { headers });
  }

  post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post<T>(url, body, { headers });
  }

  put<T>(url: string, body: T): Observable<T> {
    return this.httpClient.put<T>(url, body, { headers });
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url, { headers });
  }
}
