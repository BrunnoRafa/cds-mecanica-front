import { Component, Input, OnInit } from '@angular/core';
import { ModalAlertaService } from './modal-alerta.service';

@Component({
  selector: 'app-modal-alerta',
  templateUrl: './modal-alerta.component.html',
  styleUrls: ['./modal-alerta.component.scss']
})
export class ModalAlertaComponent {
  modal: ModalAlertaService | null = null;

  constructor(private modalAlertaService: ModalAlertaService) {
    this.modal = this.modalAlertaService;
  }

  fechar(): void {
    this.modalAlertaService.fecharAlerta();
  }
}
