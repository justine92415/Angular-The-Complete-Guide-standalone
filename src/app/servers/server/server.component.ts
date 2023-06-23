import { Component, OnInit, inject } from '@angular/core';

import { ServersService } from '../servers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server?: {id: number, name: string, status: string};

  serversService = inject(ServersService);

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
