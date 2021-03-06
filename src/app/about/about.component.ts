import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SessionTestService} from '../session-test.service';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  message:object;
  loginForm: FormGroup;  
   submitted = false;   
   success = false;  
   registered =false;
 
  

  constructor(private formBuilder: FormBuilder, private data: DataService, private session: SessionTestService,private router: Router) { }

  ngOnInit() { this.loginForm = this.formBuilder.group({ 
    Account: ['', Validators.required],       
    password: ['', Validators.required],
});
  }

  onSubmit() {
 
    this.submitted = true; 
      
if (this.loginForm.invalid) { return  window.alert("Invalid input !! Pls. enter again !!");} 
console.log('1 m here')
   this.data.login(this.loginForm.controls.Account.value,this.loginForm.controls.password.value).subscribe(data=>{
   this.success = true;
   this.session.setItem("success", `${this.success}`);
	   this.session.setItem("username", `${this.loginForm.controls.Account.value}`);
	   this.session.setItem("password", `${this.loginForm.controls.password.value}`);
window.alert( 'Login Successful')


this.router.navigate(['/']).then(() => {
  window.location.reload();
});
 
})
}




}
