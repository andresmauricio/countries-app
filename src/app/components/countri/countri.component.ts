import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countri',
  templateUrl: './countri.component.html',
  styleUrls: ['./countri.component.scss']
})
export class CountriComponent implements OnInit {
  @Input() countrie;
  constructor() { }

  ngOnInit(): void {
  }

}
