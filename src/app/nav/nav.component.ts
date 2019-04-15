import { Component, OnInit } from '@angular/core';
import { SessionTestService} from '../session-test.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle:String
  name:String
  tester:String
  constructor(private session: SessionTestService) { }

  ngOnInit() { 
    this.appTitle="Welcome NewComer"
   this.name=''
  this.tester = this.session.getItem("username")
  
  if (this.tester  != null) {
   this.name = this.tester
   this.appTitle="Welcome " +this.tester
  } else {
    this.appTitle="Welcome NewComer"
    this.name=''
  }
  
  }


}
