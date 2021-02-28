import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CarregandoObservable extends Subject<boolean> {

  private static instance: CarregandoObservable | null = null;

  constructor() {
    super();

    if (!CarregandoObservable.instance) {
      CarregandoObservable.instance = this;
    }

    return CarregandoObservable.instance;
  }

  iniciarCarregando(): void {
    this.next(true);
  }

  encerrarCarregando(): void {
    this.next(false);
  }
}
