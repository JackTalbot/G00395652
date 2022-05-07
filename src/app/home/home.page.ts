import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

constructor(private navCtrl:NavController){ }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

openpage1(){
    this.navCtrl.navigateForward('/page1');
}

openpage2(){
    this.navCtrl.navigateForward('/page1');
}

openpage3(){
    this.navCtrl.navigateForward('/page1');
}
}
