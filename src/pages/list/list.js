import {Page} from 'ionic/ionic';
 
 
@Page({
  templateUrl: 'app/list/list.html',
})
export class ListPage {
  constructor() {
  	removeItem(item){
 
    for(i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
 
    }
  }
}