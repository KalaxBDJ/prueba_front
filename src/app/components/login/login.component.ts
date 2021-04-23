import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RespUser } from '../../interfaces/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onUsuario = new EventEmitter<RespUser>();

  
  usuario : RespUser = {};



  constructor(private login : LoginService) { }

  ngOnInit(): void {
  }
  password : string = '';
  user : string = '';
  invalid : boolean = false;

  notFound : boolean = false;

  submit(e  :  Event)
  {

    if(this.password == '' || this.user == '')
    {
      this.invalid = true;
    }
    else
    {
      this.invalid = false;
      this.login.login(this.user,this.password).subscribe( (res : RespUser) => 
        {
          
          if(res.found == 404)
          {
            this.notFound = true;
          }
          else{
            
            this.usuario = res;
            this.onUsuario.emit(this.usuario);
          }
          
        });

      
      
      
    }
   
  }

  refresh()
  {
    this.invalid = false;
    this.notFound = false;
  }
}
