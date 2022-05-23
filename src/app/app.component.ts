import { Component } from '@angular/core';
import { promises } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular';

  TitleValue(): void {
    alert(this.title);
  }

  public parentCount: number = 0;

  AddUser() {

    this.parentCount += 1;
  }

  RemoveUser() {
    if (this.parentCount > 0)
      this.parentCount -= 1;
  }

  EventMessage(message: string): void {

    alert(message);

  }

  EventMessage2(message: string): void {
    console.log(message);
  }









}
