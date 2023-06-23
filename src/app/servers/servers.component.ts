import { Component, OnInit, inject } from '@angular/core';
import { ServersService } from './servers.service';
import { CommonModule } from '@angular/common';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servers',
  standalone:true,
  imports:[CommonModule,RouterLink,EditServerComponent,ServerComponent],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  serversService = inject(ServersService);

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
