import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RespUser } from '../../../interfaces/user';
import { LoginService } from '../../../services/login.service';
import {NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  // Roles
  // ADMINISTRATOR
  // USER
  // OBSERVER
  // User Test

  @Input() user : RespUser = {}
 
  closeResult = '';
  desc : string = '';
  pais : string = '';



  error : boolean = false;

  users : RespUser[] = [];

  admin : boolean = false;
  observer : boolean = false;
  usuario : boolean = false;
  nullUser : boolean = false;

  loaded : boolean = false;

  modal : NgbModalRef | undefined;

  constructor( private service : LoginService,
    private modalService: NgbModal ) { }

  ngOnInit(): void {

    if(this.user.role == 'ADMINISTRATOR')
    {
      this.admin = true;
      this.getUsers();
    }
    else if(this.user.role == 'OBSERVER')
    {
      this.observer = true;
      this.getUsers();
    }
    else if(this.user.role =='USER')
    {
      this.usuario = true;
    }
    else{
      this.nullUser = true;
    }
  }

  getUsers()
  {
    this.service.getUsers().subscribe((res : any) => {
      this.users = res;
    })
  }

  submit( arg : any)
  {

    this.service.update(arg,this.desc,this.pais).subscribe((res : RespUser)=>{

      if(res.found == 404 )
      {
        this.error = true;
      }
      else
      {
        this.service.getUsers().subscribe((res : any) => {
          this.users = res;

          this.desc = '';
          this.pais = '';

        })
      }


    })
  }

  submitUser(arg : any)
  {
    this.service.update(arg,this.desc,this.pais).subscribe((res : RespUser)=>{

      if(res.found == 404 )
      {
        this.error = true;
      }
      else
      {
        this.user.description = this.desc;
        this.user.country = this.pais;
      }


    })

  }

  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    })

    
    
}

 


}
