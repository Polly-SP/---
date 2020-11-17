import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Buy} from '../model/buymodel';

@Injectable({
  providedIn: 'root'
})
export class SrvServiceService {
  
  buys: Buy[] = [];
  buyadd: Buy[] = [];
  buyedit: Buy[] = [];
  link = 'http://localhost:3000/posts/';
  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(public http: HttpClient) {
  }

  async getBuys() {
    this.buys = [];
    
   const data = await this.http
     .get(this.link)
     .toPromise();

    for (const index in data) {
      delete data[index].createdAt;
      delete data[index].updatedAt;
      this.buys.push(data[index]);
    }

    this.buys.sort(( a, b ) =>  a.status - b.status);
    
  }

  async addBuy(buy: Buy) {
    this.buyadd = [];
    const dataadd = await this.http
    .get(this.link)
    .toPromise();

   for (const index in dataadd) {
     delete dataadd[index].createdAt;
     delete dataadd[index].updatedAt;
     this.buyadd.push(dataadd[index]);
   }



    return this.http.post(this.link, buy, this.options).toPromise();
  }

  async removeBuy(id: number) {
    let linkdel = this.link + id;
    return this.http.request('delete', linkdel, {body: {id}}).toPromise();
  }

  async editBuy(buy: Buy) {
    this.buyedit = [];
    const dataedit = await this.http
    .get(this.link)
    .toPromise();

   for (const index in dataedit) {
     delete dataedit[index].createdAt;
     delete dataedit[index].updatedAt;
     this.buyedit.push(dataedit[index]);
   }
   


    let link = this.link + buy.id;
    return this.http.put(link, buy, this.options).toPromise();
  }

  async statusBuy(phone: Buy) {
    
    const dataedit = await this.http
    .get(this.link)
    .toPromise();

   for (const index in dataedit) {
     delete dataedit[index].createdAt;
     delete dataedit[index].updatedAt;
     this.buyedit.push(dataedit[index]);
   }
   


    let link = this.link + phone.id;
    return this.http.put(link, phone, this.options).toPromise();
  }

  

  
}
