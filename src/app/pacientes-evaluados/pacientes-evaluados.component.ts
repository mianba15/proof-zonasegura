import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-pacientes-evaluados',
  templateUrl: './pacientes-evaluados.component.html',
  styleUrls: ['./pacientes-evaluados.component.css']
})
export class PacientesEvaluadosComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Pacientes Ginecológicos: 10%', 'Pacientes Quirúrgicos: 30%', 'Pacientes Médicos: 60%'];
  public doughnutChartData: MultiDataSet = [
    [10, 80, 200]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
