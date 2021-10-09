import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'employee-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'employee';

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
