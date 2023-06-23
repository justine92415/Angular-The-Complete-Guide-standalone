import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: { id: number; name: string };

  route = inject(ActivatedRoute);

  ngOnInit() {
    /*  this.route.paramMap.subscribe((params) => {
      this.user = {
        id: +params.get('id')!,
        name: params.get('name')!,
      };
    }); */

    this.route.params.subscribe((params) => {
      this.user = {
        id: +params['id']!,
        name: params['name']!,
      };
    });
  }
}
