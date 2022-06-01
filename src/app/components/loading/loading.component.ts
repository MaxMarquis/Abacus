import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
})
export class LoadingComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}
  isLoading: boolean = false;

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
