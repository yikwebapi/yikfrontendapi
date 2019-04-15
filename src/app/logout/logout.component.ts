import { Component, OnInit } from '@angular/core';
import { SessionTestService} from '../session-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,private session: SessionTestService) { }

  ngOnInit() {
     this.session.clear()
     
     this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
     
  }

 
}
