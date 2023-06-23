import { inject } from '@angular/core';
import { ServersService } from './servers/servers.service';
import { ResolveFn } from '@angular/router';

interface Server{
  id: number;
  name: string;
  status: string;
}

export const serverResolver: ResolveFn<Server> = (route, state) => {
  const serversService = inject(ServersService);

  return serversService.getServer(+route.params['id'])!;
};
