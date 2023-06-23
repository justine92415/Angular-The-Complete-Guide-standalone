import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  errorMessage!: string;

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data) => {
      this.errorMessage = data['message'];
    });
  }
}
