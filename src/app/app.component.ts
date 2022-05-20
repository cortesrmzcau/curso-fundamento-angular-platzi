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

  names: string[] = ['Cesar', 'Alejandro', 'Sebas'];
  newName: string = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
