import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SessionTestService} from '../session-test.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  username:string
  password:string
  games:Object

  constructor(private data: DataService, private session: SessionTestService,private router:Router) { }

  ngOnInit() {
    this.username = this.session.getItem("username")
    this.password = this.session.getItem("password")
    this.data.searchtoCart(this.username,this.password).subscribe(data=>{
      this.games = JSON.parse(JSON.stringify(data)).GameId

      

    })

  }


  DeleteAllCart(): void {
    this.data.deleteCart(this.username,this.password).subscribe(data=>{
      window.alert( 'Delete Successful')
      this.router.navigate(['/'])
  },error=>{
    window.alert("Error")
  })}




}

