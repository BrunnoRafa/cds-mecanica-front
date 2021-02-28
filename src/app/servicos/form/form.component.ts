import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { BaseFormsComponent } from '../../shared/base-forms/base-forms.component';
import { ModalAlertaService } from 'src/app/shared/modal-alerta/modal-alerta.service';
import { CarregandoObservable } from 'src/app/shared/spinner/carregando.observable';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BaseFormsComponent implements OnInit {

  constructor(
    formBuilder: FormBuilder,
    route: ActivatedRoute,
    private carregando$: CarregandoObservable,
    private modalAlertaService: ModalAlertaService
  ) {
    super(formBuilder, route);
  }

  ngOnInit() {
    this.verificaParams();
    this.iniciarFormGroup();
  }

  iniciarFormGroup(): void {
    this.formGroup = this.formBuilders.group({
      id: [{ value: null, disabled: this.isEditar }],
      servico: [null],
      descricao: [null]
    });
  }
}
