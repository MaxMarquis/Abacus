import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-media-query',
  templateUrl: './match-media-query.component.html',
  styleUrls: ['./match-media-query.component.sass']
})
export class MatchMediaQueryComponent implements OnInit {

  constructor() { }
  @Input() mediaQuery: string | null = null;
  DEFAULT_MEDIA_QUERY: string = "(min-width: 0px)";
  matches: boolean = false;

  ngOnInit(): void {
    console.log(this.mediaQuery);

    window.addEventListener("resize", this.checkMediaQuery.bind(this));

    this.checkMediaQuery();
  }

  checkMediaQuery() {
    if (!this.mediaQuery) return;

    try {
      this.matches = window.matchMedia(this.mediaQuery).matches;
    } catch (e) {
      const error = e as Error;

      this.matches = window.matchMedia(this.DEFAULT_MEDIA_QUERY).matches;
      console.error(error.message);
    }
  }

}
