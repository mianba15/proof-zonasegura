import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-pacientes-evaluados',
  templateUrl: './pacientes-evaluados.component.html',
  styleUrls: ['./pacientes-evaluados.component.css'],
})
export class PacientesEvaluadosComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  public doughnutChartLabels: Label[] = [
    'Pacientes Ginecológicos',
    'Pacientes Quirúrgicos',
    'Pacientes Médicos',
  ];

  public doughnutChartData: MultiDataSet = [[10, 80, 200]];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
  };

  public doughnutChartColors: Color[] = [
    { backgroundColor: ["#243982", "#FF7A7A", "#436DFF"] }
  ];

}
