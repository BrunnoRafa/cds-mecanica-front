import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarregandoObservable } from './shared/spinner/carregando.observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentChecked {
  carregando = false;
  subscriptions = new Subscription();

  constructor(
    private carregando$: CarregandoObservable,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.eventoCarregando();
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  private eventoCarregando(): void {
    this.subscriptions.add(
      this.carregando$.subscribe(
        ativarCarregando => {
          this.carregando = ativarCarregando;
        })
    );
  }
}
