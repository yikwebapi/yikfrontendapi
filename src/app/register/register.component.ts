import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;


  
  constructor(private formBuilder: FormBuilder, private router: Router,private data: DataService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Account: ['', Validators.required],
      password: ['', Validators.required],
      name : [''],
      phone: [''],
      address: [''],
      });
     
  }

  onSubmit() {
    
    this.submitted = true; 
      
if (this.registerForm.invalid) { return  window.alert("Invalid input !! Pls. enter again !!");} 
   this.data.register(this.registerForm.controls.Account.value,this.registerForm.controls.password.value,this.registerForm.controls.name.value,this.registerForm.controls.phone.value,this.registerForm.controls.address.value).subscribe(data=>{
       //this.message = data;			
  // console.log(this.message)
   this.success = true;
window.alert( 'Register Successful')

   },error=>{
  window.alert("Error Maybe account existed / phone must be integer")
})
}
}

