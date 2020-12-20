import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBuilder } from '../shared/http-builder.service';

@Injectable({
  providedIn: 'root'
})
export class PecasService {

  constructor(private httpBuilder: HttpBuilder) { }

  listar(): Observable<any> {
    return this.httpBuilder.get<any>(environment.API_PECAS);
  }
}
