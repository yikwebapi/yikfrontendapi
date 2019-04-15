import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { SessionTestService} from '../session-test.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  username:string
  password:string
  name:string
  type:string
  price:string
  description:string
  image:string
  Comments:object
  id: string;
  sub: any;
  str: string;
  gameDetail:object
  commentDetail:object
  constructor(private formBuilder: FormBuilder, private data: DataService, private session: SessionTestService,private router:ActivatedRoute,private router1:Router) { }

  ngOnInit() {
    this.username = this.session.getItem("username")
    this.password = this.session.getItem("password")
    this.sub = this.router.params.subscribe(params => {
      this.id = params['id']; 
   });
   
   this.data.getGameDetail(this.username,this.password,this.id).subscribe(data=>{
    this.gameDetail = JSON.parse(JSON.stringify(data)).user.datagf[0]
    this.type = this.gameDetail['type']
    this.name = this.gameDetail['name']
    this.description = this.gameDetail['description']
    this.image = this.gameDetail['image']
    this.price = this.gameDetail['price']
  });


  this.data.getComment(this.username,this.password,this.id).subscribe(data=>{
      this.commentDetail = JSON.parse(JSON.stringify(data)).user.Comment
      this.Comments = this.commentDetail
  });
    

  }


  AddComment(): void {
    this.data.addcomments(this.username,this.password,this.id,this.str).subscribe(data=>{
    
    window.alert( 'Added Successful')
    this.data.getComment(this.username,this.password,this.id).subscribe(data=>{
      this.commentDetail = JSON.parse(JSON.stringify(data)).user.Comment
      this.Comments = this.commentDetail
  });

    console.log(this.str)
},error=>{
  window.alert( 'Comment before')
})}

UpdateComment() : void {
  this.data.updatecomments(this.username,this.password,this.id,this.str).subscribe(data=>{
    
    window.alert( 'Update Successful')
    this.data.getComment(this.username,this.password,this.id).subscribe(data=>{
      this.commentDetail = JSON.parse(JSON.stringify(data)).user.Comment
      this.Comments = this.commentDetail
  });
    console.log(this.str)
},error=>{
  window.alert("Error")
})}

DeleteComment(): void {
  this.data.deletecomments(this.username,this.password,this.id).subscribe(data=>{
    window.alert( 'Delete Successful')
    this.data.getComment(this.username,this.password,this.id).subscribe(data=>{
      this.commentDetail = JSON.parse(JSON.stringify(data)).user.Comment
      this.Comments = this.commentDetail
  });
},error=>{
  window.alert("Error")
})}


AddToCart():void {

  this.data.addtoCarts(this.username,this.password,this.id,this.type,this.image,this.name,this.price).subscribe(data=>{
    window.alert( 'Add Successful')
},error=>{
  window.alert(error.toString())
})}




}




