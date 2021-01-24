import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { BaseFormsComponent } from '../../shared/base-forms/base-forms.component';
import { PecasService } from '../pecas.service';
import { Pecas } from '../pecas.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BaseFormsComponent implements OnInit {
  peca: Pecas | null = null;

  constructor(
    formBuilder: FormBuilder,
    route: ActivatedRoute,
    private pecasService: PecasService
  ) {
    super(formBuilder, route);
  }

  ngOnInit() {
    this.verificaParams();
    this.iniciarFormGroup();
    this.buscarPeca();
  }

  iniciarFormGroup(): void {
    this.formGroup = this.formBuilders.group({
      id: [{ value: null, disabled: this.isEditar }],
      nome: [null],
      descricao: [null],
      fabricante: [null]
    });
  }

  buscarPeca(): void {
    if (!this.isEditar || !this.codigo) { return; }

    this.pecasService.buscarPeca(this.codigo)
      .pipe(take(1))
      .subscribe((pecas: Pecas[]) => {
        this.peca = pecas[0];
        this.preencherForm<Pecas>(this.peca);
      },
        (error: any) => {
          console.log(error);
        }
      );
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    const peca = !!this.peca ? this.peca : <Pecas>{};
    this.peca = this.preencherObjeto<Pecas>(peca);

    if (!this.peca) {
      alert('Favor preencher os campos');
      return;
    }

    this.pecasService.enviar(this.codigo, this.peca, this.isEditar)
      .pipe(take(1))
      .subscribe((peca: Pecas | null) => {
        this.peca = Object.assign({}, this.peca, peca);
        this.isEditar = true;
        this.codigo = !!this.peca?.id ? this.peca?.id : null;
        this.preencherForm<Pecas>(this.peca);
        this.habilitarCampo('id', false);
      },
        (error: any) => {
          console.log(error);
        }
      )
  }
}
