import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Cesar';
  age = 27;
  img = 'https://1.bp.blogspot.com/-xm6qY-hkYOc/X4MbD0L7C1I/AAAAAAABDuo/znkKx2jkf5kRoIte-rQpNb4hfryTUdJTACLcBGAsYHQ/s2048/EjS_hIfUcAA1nGh.jpg';

  btnDisabled = false;

  person = {
    name: 'Cesar',
    age: 27,
    img: 'https://1.bp.blogspot.com/-xm6qY-hkYOc/X4MbD0L7C1I/AAAAAAABDuo/znkKx2jkf5kRoIte-rQpNb4hfryTUdJTACLcBGAsYHQ/s2048/EjS_hIfUcAA1nGh.jpg'
  }
}
