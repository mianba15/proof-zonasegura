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
import { MatTabsModule } from '@angular/material/tabs';
import { TabsPacientesComponent } from './tabs-pacientes/tabs-pacientes.component';
import { NgxDonutChartModule } from 'ngx-doughnut-chart';
 
@NgModule({
  declarations: [
    AppComponent,
    AsiVamosComponent,
    PacientesEvaluadosComponent,
    PEvaluadosComponent,
    TabsPacientesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    ChartsModule,
    GoogleChartsModule,
    MatTabsModule,
    NgxDonutChartModule
  ],
  exports: [MatProgressBarModule, NgxDonutChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
