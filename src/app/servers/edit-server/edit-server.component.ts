import { Component, OnInit, inject } from '@angular/core';

import { ServersService } from '../servers.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server?: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  serversService = inject(ServersService);

  route = inject(ActivatedRoute);

  router = inject(Router);

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams) => (this.allowEdit = queryParams['allowEdit'] === '1')
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
  }

  onUpdateServer() {
    if (this.server) {
      this.serversService.updateServer(this.server.id, {
        name: this.serverName,
        status: this.serverStatus,
      });
      this.changesSaved = true;
      this.router.navigate(['../'], { relativeTo: this.route ,queryParamsHandling: 'preserve'});
    }
  }
}
