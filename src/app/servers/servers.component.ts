import { Component, OnInit, inject } from '@angular/core';
import { ServersService } from './servers.service';
import { CommonModule } from '@angular/common';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, EditServerComponent, ServerComponent],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  serversService = inject(ServersService);

  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['/servers'], { relativeTo: this.route });
  }
}
