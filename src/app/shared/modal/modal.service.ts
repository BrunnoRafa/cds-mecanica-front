import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isExibeModal: boolean = false;
  private isModalAlerta: boolean = false;

  exibirModal(isAlerta: boolean = false): void {
    this.isExibeModal = true;
    this.isModalAlerta = isAlerta;
  }

  fecharModal(): void {
    this.isExibeModal = false;
  }

  get mostraModal(): boolean {
    return this.isExibeModal;
  }

  get modalAlerta(): boolean {
    return this.isModalAlerta;
  }
}
