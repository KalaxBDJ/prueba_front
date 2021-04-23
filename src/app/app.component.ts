import { Component, OnInit } from '@angular/core';
import { RespUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  validated : boolean = false;

  ngOnInit(): void {
    
  }

  usuario : RespUser = {};
  title = 'prueba';

  onUsuario(e : any)
  {
    this.validated = true;
    this.usuario = e;
  }

  
}
