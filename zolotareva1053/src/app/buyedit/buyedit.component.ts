import { Component, OnInit } from '@angular/core';
import {SrvServiceService} from '../service/json/srv.service.service'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buyedit',
  templateUrl: './buyedit.component.html',
  styleUrls: ['./buyedit.component.css']
})
export class BuyeditComponent implements OnInit {

  constructor(private srv: SrvServiceService, private activatedRouter:ActivatedRoute) {
    this.activatedRouter.params.subscribe(param => {
      this.id = parseInt(param.id,10);
    })
   }

  id: number;

  buyEditForm: FormGroup;
  disabledControl: boolean;

  ngOnInit(): void {
    console.log(this.id)
    
    this.buyEditForm = new FormGroup({
      name: new FormControl({value: '', disabled: this.disabledControl}, [Validators.required]),
      kolvo: new FormControl({value: '', disabled: this.disabledControl}, [Validators.required]),
      status: new FormControl({value: '', disabled: this.disabledControl}, [Validators.required]),
    });

    if (this.id) {
      this.srv.getBuys().then(()=> {
        (this.srv.buys).forEach(buy => {
          if (buy.id === this.id){
            const item = buy;
            delete item.id;
            this.buyEditForm.setValue(item);
          }
        })
      })
    }
  }

  onEditBuy(id:number){
    let buy = this.buyEditForm.value;
    buy.id = id;
    this.srv.editBuy(buy).then(()=>
    document.location.href = "/buylist")
  }

  onRemoveBuy(id:number){
    this.srv.removeBuy(id).then(()=> document.location.href ="/buylist")
  }

}
