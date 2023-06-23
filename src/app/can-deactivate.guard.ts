import { CanDeactivateFn } from '@angular/router';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

export const canDeactivateGuard: CanDeactivateFn<EditServerComponent> = (component, currentRoute, currentState, nextState) => {
  if(!component.allowEdit) {
    return true;
  }if((component.serverName !== component.server?.name || component.serverStatus !== component.server?.status) && !component.changesSaved){
    return confirm('Do you want to discard the changes?');
  }else{
    return true;
  }
};
