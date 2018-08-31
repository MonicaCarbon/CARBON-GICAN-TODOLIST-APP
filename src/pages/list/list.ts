import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item';




@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public items = [];

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    

  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
  }
 
  viewItem(item){
 
  }
  removeItem(item){
    console.log(item);
    var i;
    for(i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
 
    }
  }


  

}
