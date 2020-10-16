import { Component, OnInit } from '@angular/core';
import {
  ChartBase,
  ChartEditorComponent,
  ChartType,
  FilterType,
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  Column,
  GoogleChartComponent,
} from 'angular-google-charts';

@Component({
  selector: 'app-p-evaluados',
  templateUrl: './p-evaluados.component.html',
  styleUrls: ['./p-evaluados.component.css'],
})
export class PEvaluadosComponent implements OnInit {
  constructor() {}

  public changingChart: {
   type: ChartType.PieChart,
    data: [
      ['Copper', 8.94],
      ['Silver', 10.49],
      ['Gold', 19.3],
      ['Platinum', 21.45]
    ];
    columns: ['Element', 'Density'];
    options: {
      pieHole: 0.4;
    };
  };

  ngOnInit(): void {}
}
