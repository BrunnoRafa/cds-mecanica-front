import { Injectable } from '@angular/core';
import { Alerta } from './alerta.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalAlertaService {
  private isExibeAlerta: boolean = false;
  data = <Alerta>{};
  isError = false;

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
    this.isError = false;

    switch (data.status) {
      case 200:
        dataAlerta.mensagens = data.mensagens;
        break;
      case 400:
        const erro = data?.error[0];
        dataAlerta.codigoErro = erro?.idErro;
        dataAlerta.mensagens = [erro.mensagem];
        this.isError = true;
        break;
      default:
        dataAlerta.codigoErro = 500;
        dataAlerta.mensagens = ['O Servidor se comportou de forma inesperada.'];
        this.isError = true;
        break;
    }

    return dataAlerta;
  }
}
