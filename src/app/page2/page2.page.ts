import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
myStatus: string = "";
  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  SaveStatus(){
    this.storage.create().then(()=>{
      this.storage.set("status", this.myStatus)
    }).catch();
  }
}
