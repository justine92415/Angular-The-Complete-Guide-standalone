import { Component, OnInit, inject } from '@angular/core';

import { ServersService } from '../servers.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-server',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server?: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  serversService = inject(ServersService);

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
  }

  onUpdateServer() {
    if (this.server) {
      this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    }
  }

}
