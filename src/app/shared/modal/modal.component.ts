import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modal: ModalService | null = null;

  constructor(private modalService: ModalService) {
    this.modal = this.modalService;
  }

  fechar(): void {
    this.modalService.fecharModal();
  }
}
