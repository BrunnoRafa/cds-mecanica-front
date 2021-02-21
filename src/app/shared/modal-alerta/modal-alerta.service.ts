import { Injectable } from '@angular/core';
import { Alerta } from './alerta.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalAlertaService {
  private isExibeAlerta: boolean = false;
  data = <Alerta>{};

  get mostrarAlerta(): boolean {
    return this.isExibeAlerta;
  }

  exibirAlerta(data: any): void {
    this.data = this.tratarMsg(data);
    this.isExibeAlerta = true;
  }

  fecharAlerta(): void {
    this.data = <Alerta>{};
    this.isExibeAlerta = false;
  }

  tratarMsg(data: any): Alerta {
    const dataAlerta = <Alerta>{};
    dataAlerta.titulo = 'Atenção';

    if (data.status === 0) {
      dataAlerta.codigoErro = 500;
      dataAlerta.mensagens = ['O Servidor se comportou de forma inesperada.'];
      return dataAlerta;
    }

    return dataAlerta;
  }
}
