import {  Inject,Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SessionTestService {

  constructor(@Inject(SESSION_STORAGE)private session: StorageService) { }


  public sessiondata:any =[]
 
  setItem(key, val): void {
    this.session.set(key, val);
    this.sessiondata[key]= this.session.get(key);
  }

   getItem(key): string {
      this.sessiondata[key]= this.session.get(key);

    return this.sessiondata[key]
  }

  clear(): void {
    this.session.clear();
    }






}
