import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SessionTestService} from '../session-test.service';


@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.scss']
})
export class AddgameComponent implements OnInit {
  items = [ { name: 'Card'}, { name: 'Strategy'}, { name: 'Coopeative'}, { name: 'Battle'}, { name: 'MMOPRG'}];
  selectedItem: any;
  addGameForm: FormGroup;  
   submitted = false;   
   success = false;  
   registered =false;
   username:string
   password:string
   typename:string
  constructor(private formBuilder: FormBuilder, private data: DataService, private session: SessionTestService,private router:Router) { }

  ngOnInit() {
    this.username = this.session.getItem("username")
    this.password = this.session.getItem("password")
    this.selectedItem = this.items[0].name
    this.addGameForm = this.formBuilder.group({ 
      
      name: [''],       
      description: [''],
      price:['']
  });

}

onSubmit() {
  this.submitted = true; 
    
if (this.addGameForm.invalid) { return  window.alert("Invalid input !! Pls. enter again !!");} 
 this.data.addGame(this.username,this.password,this.selectedItem,this.addGameForm.controls.description.value,this.addGameForm.controls.name.value,this.addGameForm.controls.price.value).subscribe(data=>{
window.alert( 'Add Game Successful')
this.success = true;
this.router.navigate(['/'])

},error=>{
  window.alert("price must be number")
})
}

onChange(types) {
  this.selectedItem = types
}
}
