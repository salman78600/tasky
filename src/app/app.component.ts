import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy.users';
import { UserTaskComponent } from "./user-task/user-task.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, UserTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task_app';
  users = DUMMY_USERS;
  selectUser?:string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectUser);
  }

  onSelectUser(id: string) {
    this.selectUser= id;
    console.log('Selected user ID:', id);
  }
}
