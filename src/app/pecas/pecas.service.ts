import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBuilder } from '../shared/http-builder.service';
import { Pecas } from './pecas.interface';

@Injectable({
  providedIn: 'root'
})
export class PecasService {
  private readonly URL_API = `${environment.API_LOCAL_HOST}/pecas`;

  constructor(private httpBuilder: HttpBuilder) { }

  listar(): Observable<Pecas[]> {
    return this.httpBuilder.get<Pecas[]>(this.URL_API);
  }

  buscarPeca(codigo: number): Observable<Pecas[]> {
    return this.httpBuilder.get<Pecas[]>(`${this.URL_API}/${codigo}`);
  }

  enviar(codigo: number | null = null, pecas: Pecas, isEditar: boolean): Observable<Pecas | null> {
    if (isEditar) {
      return this.atualizar(codigo, pecas);
    }
    return this.cadastrar(pecas);
  }

  deletar(codigo: number): Observable<Pecas> {
    return this.httpBuilder.delete<Pecas>(`${this.URL_API}/${codigo}`);
  }

  private cadastrar(peca: Pecas): Observable<Pecas | null> {
    return this.httpBuilder.post<Pecas>(this.URL_API, peca);
  }

  private atualizar(codigo: number | null = null, pecas: Pecas): Observable<Pecas | null> {
    return this.httpBuilder.put<Pecas>(`${this.URL_API}/${codigo}`, pecas);
  }
}
