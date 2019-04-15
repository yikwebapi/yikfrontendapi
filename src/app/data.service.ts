import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/module/User';
import { User1 } from 'src/app/module/User1';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  firstClick() {
    return console.log('clicked');
    }
    getGame(type:string) {
      return this.http.get('https://limitless-hamlet-43645.herokuapp.com/games?type=' + type)
    }


    login(username:string,password:string) 
    {
       const urlLogin = 'https://limitless-hamlet-43645.herokuapp.com/logins';
     
       let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
       //  console.log(`${username}:${password}`+' '+choice);
       //  console.log(authorizationData);
     
   
     const httpOptions = new  HttpHeaders()
      .set('Accept','application/json') 
     .set('content-type', 'application/json')
     .set('Authorization',`${authorizationData}`)
   return this.http.get(urlLogin, {
      headers: httpOptions
  }) 
    }


    register(username:string,password:string,name:String,phone:String,address:String) 
    {
       const urlReg = 'https://limitless-hamlet-43645.herokuapp.com/accounts';
     
       let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
     
   
     const httpOptions = new  HttpHeaders()
      .set('Accept','application/json') 
     .set('content-type', 'application/json')
     .set('Authorization',`${authorizationData}`)
  
   return this.http.post(urlReg, {'name': `${name}`,            
   'phone':`${phone}`,
   'address':`${address}`,
     },{headers: httpOptions}) 
    }

 
  
    getprofile(username:string,password:string) 
    {
       const urlPro ='https://limitless-hamlet-43645.herokuapp.com/profile';
     
       let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
     
   
     const httpOptions = new  HttpHeaders()
      .set('Accept','application/json') 
     .set('content-type', 'application/json')
     .set('Authorization',`${authorizationData}`)
     return this.http.get(urlPro, {
      headers: httpOptions}) 
    }


    updateprofile(username:string,password:string,name:String,phone:String,address:String) 
    {
       const urlReg = 'https://limitless-hamlet-43645.herokuapp.com/profile';
     
       let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
     
   
     const httpOptions = new  HttpHeaders()
      .set('Accept','application/json') 
     .set('content-type', 'application/json')
     .set('Authorization',`${authorizationData}`)
  
   return this.http.put(urlReg, {'name': `${name}`,            
   'phone':`${phone}`,
   'address':`${address}`,
     },{headers: httpOptions}) 
    }



    addGame(username:string,password:string,type:String,description:String,name:String,price:String) 
    {
       const urladdgame = 'https://limitless-hamlet-43645.herokuapp.com/games';
     
       let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
     
   
     const httpOptions = new  HttpHeaders()
      .set('Accept','application/json') 
     .set('content-type', 'application/json')
     .set('Authorization',`${authorizationData}`)
  
   return this.http.post(urladdgame, {'type': `${type}`,            
   'description':`${description}`,
   'name':`${name}`,
   'price':`${price}`,
     },{headers: httpOptions}) 
    }

    getGameDetail(username:string,password:string,gameid:string) {
      const urlgame = 'https://limitless-hamlet-43645.herokuapp.com/game/'+gameid;
      let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
     
   
      const httpOptions = new  HttpHeaders()
       .set('Accept','application/json') 
      .set('content-type', 'application/json')
      .set('Authorization',`${authorizationData}`)

      return this.http.get(urlgame,{headers: httpOptions}) 
       }
    
       getComment(username:string,password:string,gameid:string) {
        const urlgame = 'https://limitless-hamlet-43645.herokuapp.com/comment/'+gameid;
        let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
       
     
        const httpOptions = new  HttpHeaders()
         .set('Accept','application/json') 
        .set('content-type', 'application/json')
        .set('Authorization',`${authorizationData}`)
  
        return this.http.get(urlgame,{headers: httpOptions}) 
         }

    
         addcomments(username:string,password:string,gameid:string,comment:string) {
          const urladdcomment = 'https://limitless-hamlet-43645.herokuapp.com/comment/'+gameid;
          let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
         
       
          const httpOptions = new  HttpHeaders()
           .set('Accept','application/json') 
          .set('content-type', 'application/json')
          .set('Authorization',`${authorizationData}`)
    
          return this.http.post(urladdcomment,{'comment': `${comment}`},{headers: httpOptions}) 
           }

           updatecomments(username:string,password:string,gameid:string,comment:string) {
            const urladdcomment = 'https://limitless-hamlet-43645.herokuapp.com/comment/'+gameid;
            let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
           
         
            const httpOptions = new  HttpHeaders()
             .set('Accept','application/json') 
            .set('content-type', 'application/json')
            .set('Authorization',`${authorizationData}`)
      
            return this.http.put(urladdcomment,{'comment': `${comment}`},{headers: httpOptions}) 
             }

             deletecomments(username:string,password:string,gameid:string) {
              const urladdcomment = 'https://limitless-hamlet-43645.herokuapp.com/comment/'+gameid;
              let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
             
           
              const httpOptions = new  HttpHeaders()
               .set('Accept','application/json') 
              .set('content-type', 'application/json')
              .set('Authorization',`${authorizationData}`)
        
              return this.http.delete(urladdcomment,{headers: httpOptions}) 
               }


               addtoCarts(username:string,password:string,gameid:string,type:string,image:string,name:string,price:string) {
                const urladdtoCart = 'https://limitless-hamlet-43645.herokuapp.com/cart';
                let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
               
             
                const httpOptions = new  HttpHeaders()
                 .set('Accept','application/json') 
                .set('content-type', 'application/json')
                .set('Authorization',`${authorizationData}`)                

                return this.http.post(urladdtoCart,{'gid': `${gameid}`,
                'type': `${type}`,
                'image': `${image}`,
                'name': `${name}`,
                'price': `${price}`}, {headers: httpOptions});
               }


               searchtoCart(username:string,password) {
                const urlsearchcart = 'https://limitless-hamlet-43645.herokuapp.com/cart';
                let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
               
             
                const httpOptions = new  HttpHeaders()
                 .set('Accept','application/json') 
                .set('content-type', 'application/json')
                .set('Authorization',`${authorizationData}`)                

                return this.http.get(urlsearchcart, {headers: httpOptions});
               }

               deleteCart(username:string,password) {
                const urlsearchcart = 'https://limitless-hamlet-43645.herokuapp.com/cart';
                let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
               
             
                const httpOptions = new  HttpHeaders()
                 .set('Accept','application/json') 
                .set('content-type', 'application/json')
                .set('Authorization',`${authorizationData}`)                

                return this.http.delete(urlsearchcart, {headers: httpOptions});
               }






}




