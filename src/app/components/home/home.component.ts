import { Component, Input, OnInit } from '@angular/core';
import { RespUser } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() usuario : RespUser = {}

  constructor() { }

  ngOnInit(): void {
  }

}
