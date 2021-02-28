import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CarregandoObservable } from './spinner/carregando.observable';

const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class HttpBuilder {

  constructor(
    private httpClient: HttpClient,
    private carregando$: CarregandoObservable
  ) { }

  get<T>(url: string): Observable<T> {
    this.iniciarCarregando();
    return this.httpClient.get<T>(url, { headers })
      .pipe(
        map((res: T) => {
          this.encerrarCarregando();
          return res;
        })
      );
  }

  post<T>(url: string, body: T): Observable<T> {
    this.iniciarCarregando();
    return this.httpClient.post<T>(url, body, { headers })
      .pipe(
        map((res: T) => {
          this.encerrarCarregando();
          return res;
        })
      );
  }

  put<T>(url: string, body: T): Observable<T> {
    this.iniciarCarregando();
    return this.httpClient.put<T>(url, body, { headers })
      .pipe(
        map((res: T) => {
          this.encerrarCarregando();
          return res;
        })
      );
  }

  delete<T>(url: string): Observable<T> {
    this.iniciarCarregando();
    return this.httpClient.delete<T>(url, { headers })
      .pipe(
        map((res: T) => {
          this.encerrarCarregando();
          return res;
        })
      );
  }

  private iniciarCarregando(): void {
    this.carregando$.iniciarCarregando();
  }

  private encerrarCarregando(): void {
    this.carregando$.encerrarCarregando();
  }
}
