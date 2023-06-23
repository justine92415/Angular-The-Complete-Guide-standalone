import { Component, OnInit, inject } from '@angular/core';

import { ServersService } from '../servers.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server?: { id: number; name: string; status: string };

  serversService = inject(ServersService);

  route = inject(ActivatedRoute);

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }
}
