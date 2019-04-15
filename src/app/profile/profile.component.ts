import { Component, OnInit } from '@angular/core';
import { SessionTestService} from '../session-test.service';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username:string
  password:string
  profiles:object
  Account:string
  name:string
  phone:string
  address:string
  ProfileForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  constructor(private formBuilder: FormBuilder,private data: DataService, private session: SessionTestService,private router: Router) { }

  ngOnInit() {
    this.username = this.session.getItem("username")
    this.password = this.session.getItem("password")
    this.data.getprofile(this.username,this.password).subscribe(data=>{
      this.profiles = JSON.parse(JSON.stringify(data)).user.profiles[0]
      this.Account = this.profiles['Account']
      this.name = this.profiles['name']
      this.phone = this.profiles['phone']
      this.address = this.profiles['address']

    }
  )
  this.ProfileForm = this.formBuilder.group({
    name : [''],
    phone: [''],
    address: [''],
    });
}

onSubmit() {
    
  this.submitted = true; 
    
if (this.ProfileForm.invalid) { return  window.alert("Invalid input !! Pls. enter again !!");} 
 this.data.updateprofile(this.username,this.password,this.ProfileForm.controls.name.value,this.ProfileForm.controls.phone.value,this.ProfileForm.controls.address.value).subscribe(data=>{
     //this.message = data;			
// console.log(this.message)
 this.success = true;
window.alert( 'Update Successful')
this.data.getprofile(this.username,this.password).subscribe(data=>{
  this.profiles = JSON.parse(JSON.stringify(data)).user.profiles[0]
  this.Account = this.profiles['Account']
  this.name = this.profiles['name']
  this.phone = this.profiles['phone']
  this.address = this.profiles['address']

})

})
}




}
