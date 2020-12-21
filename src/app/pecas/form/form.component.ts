import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isEditar = false;

  formGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.verificaParams();
    this.iniciarFormGroup();
  }

  verificaParams(): void {
    this.route.params
      .pipe(take(1))
      .subscribe(params => {
        this.isEditar = !!params.id;
      });
  }

  iniciarFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      id: [null],
      nome: [null],
      descricao: [null]
    });
  }

  onSubmit(): void {
    console.log(this.formGroup?.value)
  }

  limpar(): void {
    // Adicionar modal de confirmação antes de limpar os campos
    this.formGroup?.reset();
  }
}
