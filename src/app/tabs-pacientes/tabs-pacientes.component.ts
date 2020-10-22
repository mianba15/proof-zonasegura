import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs-pacientes',
  templateUrl: './tabs-pacientes.component.html',
  styleUrls: ['./tabs-pacientes.component.css'],
})
export class TabsPacientesComponent implements OnInit {
  progress = 0;
  constructor() {
    setInterval(() => {
      if (this.progress < 50) {
        this.progress = this.progress + 1;
      } else {
        this.progress = 0;
      }
    }, 100);
  }

  ngOnInit(): void {}

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Requiere', 'Recibió', 'Efectiva' ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [800, 0, 0, 0], label: 'Requiere', stack: 'a' },
    { data: [0, 200, 0, 0], label: 'No recibió', stack: 'a' },
    { data: [0, 400, 0, 0], label: 'Si recibió', stack: 'a' },
    { data: [0, 0, 400, 0], label: 'Efectiva', stack: 'a' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor: '#FF7A7A' },
    { backgroundColor: '#243982' },
    { backgroundColor: '#436DFF' },
    { backgroundColor: '#6846E0' }
  ];
}
