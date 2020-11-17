import { Component, OnInit } from '@angular/core';
import {Buy} from '../service/model/buymodel';
import {SrvServiceService} from '../service/json/srv.service.service';

@Component({
  selector: 'app-buylist',
  templateUrl: './buylist.component.html',
  styleUrls: ['./buylist.component.css']
})
export class BuylistComponent implements OnInit {

  buys: Buy[] = [];
  

  constructor(private srv:SrvServiceService) { }

  ngOnInit(): void {
    this.buys = [];
    this.srv.getBuys().then(() => (this.srv.buys).forEach(buy=> this.buys.push(buy)));
   
  }
  
  onEditStatus(id,status){
    let count = 0;
    for (let i in this.buys){
      if (this.buys[i].id == id) {
        console.log(this.buys[i]);
        if (status==0){
        this.buys[i].status=1
        this.srv.editBuy(this.buys[i]);
      } else {this.buys[i].status=0; this.srv.editBuy(this.buys[i]);
      }
      }

    }

    this.buys.sort(( a, b ) =>  a.status - b.status);

  }

  sorts = true;

  onSorts(){
    
    if (this.sorts == false){
      this.sorts = true;
      this.buys.sort((prev,next) =>{
        if (prev.name < next.name) return -1;
        else if (prev.name > next.name) return 1;
        else return 0;
      });
    } else {
      this.sorts=false;
      this.buys.sort((prev,next)=>{
        if (prev.name > next.name) return -1;
        else if (prev.name < next.name) return 1;
        else return 0;
      })
    }
    this.buys.sort(( a, b ) =>  a.status - b.status);
    }

   

  

}
