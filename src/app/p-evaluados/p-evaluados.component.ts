import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-evaluados',
  templateUrl: './p-evaluados.component.html',
  styleUrls: ['./p-evaluados.component.css'],
})
export class PEvaluadosComponent implements OnInit {
  constructor() {}

  myType = 'PieChart';
  myData = [
    ['Pacientes ginecologicos', 10],
    ['Pacientes Quirurgicos', 80],
    ['Pacientes Médicos', 200],
  ];
  options = {
    pieHole: 0.3,
  };

  ngOnInit(): void {}

  donutChartData = [
    {
      label: 'Liverpool FC',
      value: 5,
      color: 'red',
    },
    {
      label: 'Real Madrid	',
      value: 13,
      color: 'black',
    },
    {
      label: 'FC Bayern München',
      value: 5,
      color: 'blue',
    },
  ];
}
