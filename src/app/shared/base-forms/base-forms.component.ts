import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  templateUrl: './base-forms.component.html'
})
export class BaseFormsComponent {
  isEditar = false;
  formGroup = new FormGroup({});
  formBuilders = new FormBuilder();

  codigo: number | null = null;
  activatedRoute: ActivatedRoute | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formBuilders = this.formBuilder;
    this.activatedRoute = this.route;
  }

  verificaParams(): void {
    this.route.params
      .pipe(take(1))
      .subscribe(params => {
        if (!!params.id) {
          this.isEditar = true;
          this.codigo = params.id;
        }
      });
  }

  iniciarFormGroup(): void {
    this.formGroup = this.formBuilder.group({});
  }

  preencherForm<T>(data: T): void {
    Object.keys(data).forEach((chave: string) => {
      if (this.formGroup.get(chave)) {
        this.formGroup.patchValue({ [chave]: data[chave as keyof T] });
      }
    });
  }

  preencherObjeto<T>(data: T): T | null {
    const dadosForm = this.formGroup.getRawValue();
    Object.keys(dadosForm).forEach((chave: string) => {
      data[chave as keyof T] = dadosForm[chave];
    });
    return data;
  }

  habilitarCampo(control: string, isHabilitado: boolean): void {
    const campo = this.formGroup.get(control);
    if (!campo) { return; }

    if (isHabilitado) {
      campo?.enable();
    } else {
      campo?.disable();
    }
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    console.log('formGroup ', this.formGroup.value);
    alert('Implementação do onSubmit, pendente');
  }

  limpar(e: Event): void {
    e.preventDefault();
    // Adicionar modal de confirmação antes de limpar os campos
    alert('Limpar form');
    this.formGroup?.reset();
  }

  voltar(e: Event): void {
    e.preventDefault();
    window.history.back();
  }
}
