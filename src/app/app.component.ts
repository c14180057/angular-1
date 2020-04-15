import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Greg';
  item=[{nama : 'Kelengkeng',
  harga : 50000
  },{nama:'Jeruk',harga:30000}];
  list=[1,2,3,4]
  show:boolean=false;
  Pesan=''
  onSave()
  {
    this.Pesan='Tombol Baru Ditekan';
  }
}
