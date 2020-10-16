import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AsiVamosComponent } from './asi-vamos/asi-vamos.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PacientesEvaluadosComponent } from './pacientes-evaluados/pacientes-evaluados.component';
import { ChartsModule } from 'ng2-charts';
import { PEvaluadosComponent } from './p-evaluados/p-evaluados.component';

import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [AppComponent, AsiVamosComponent, PacientesEvaluadosComponent, PEvaluadosComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    ChartsModule,
    GoogleChartsModule
  ],
  exports: [
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
