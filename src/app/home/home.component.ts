import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SessionTestService} from '../session-test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [ { name: 'Card'}, { name: 'Strategy'}, { name: 'Coopeative'}, { name: 'Battle'}, { name: 'MMOPRG'}];
  games: Object;
  submitted = false;   
  success = false;  
  registered =false;
  searchGameForm: FormGroup;  
  username:string
  password:string
  selectedItem: any;


  constructor(private formBuilder: FormBuilder, private data: DataService, private session: SessionTestService,private router:Router) { }

  ngOnInit() {
    this.username = this.session.getItem("username")
    this.password = this.session.getItem("password")
    this.selectedItem = this.items[0].name
    this.searchGameForm = this.formBuilder.group({ 
  });
    this.data.getGame('Card').subscribe(data=>{
      this.games = data
          })
     
  }
  onChange(types) {
    this.selectedItem = types
  }

  onSubmit() {
    this.submitted = true; 
      
  if (this.searchGameForm.invalid) { return  window.alert("Invalid input !! Pls. enter again !!");}
   this.data.getGame(this.selectedItem).subscribe(data=>{
    this.games = data
  })
  }

  onClickYeah(id) {
    this.router.navigate(['/game', id]);
  }


}
