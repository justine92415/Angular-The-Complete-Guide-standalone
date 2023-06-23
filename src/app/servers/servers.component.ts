import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { CommonModule } from '@angular/common';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';

@Component({
  selector: 'app-servers',
  standalone:true,
  imports:[CommonModule,EditServerComponent,ServerComponent],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
