import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  nameImg = 'photo.jpg';
  constructor() {}

  ngOnInit(): void {}
}
