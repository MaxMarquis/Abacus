import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sommaire-depenses',
  templateUrl: './sommaire-depenses.component.html',
  styleUrls: ['./sommaire-depenses.component.sass'],
})
export class SommaireDepensesComponent implements OnInit {
  dateOne: Date = new Date(1979, 0, 1);
  dateTwo: Date = new Date();

  constructor() {}

  ngOnInit() {}

  // collapse fermé pour input dates
  public isCollapsed = true;

  doFilter(dateO: HTMLInputElement, dateT: HTMLInputElement): void {
    this.dateOne =
      dateO.value.trim() == '' ? this.dateOne : new Date(dateO.value);
    this.dateTwo =
      dateT.value.trim() == '' ? this.dateTwo : new Date(dateT.value);
  }
}
