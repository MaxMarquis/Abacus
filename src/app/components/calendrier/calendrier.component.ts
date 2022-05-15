import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.sass']
})
export class CalendrierComponent implements OnInit {
  range = new FormGroup({
  start: new FormControl(),
  end: new FormControl(),
  });


  constructor() { }

  ngOnInit(): void {
  }

}
