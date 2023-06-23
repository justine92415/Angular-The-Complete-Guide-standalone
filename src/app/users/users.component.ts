import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  standalone:true,
  imports:[CommonModule,UserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
}