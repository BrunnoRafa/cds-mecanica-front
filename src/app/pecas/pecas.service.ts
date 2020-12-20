import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBuilder } from '../shared/http-builder.service';
import { Pecas } from './pecas.interface';

@Injectable({
  providedIn: 'root'
})
export class PecasService {

  constructor(private httpBuilder: HttpBuilder) { }

  listar(): Observable<Pecas[]> {
    return this.httpBuilder.get<Pecas[]>(environment.API_PECAS);
  }
}
