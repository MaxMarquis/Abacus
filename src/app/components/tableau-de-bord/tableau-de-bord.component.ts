import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.sass']
})
export class TableauDeBordComponent implements OnInit {
    expenseList: Details[] = [];

  

  constructor() { }

  ngOnInit(): void {
  }

}
