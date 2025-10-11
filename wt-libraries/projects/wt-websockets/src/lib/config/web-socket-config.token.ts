import { InjectionToken } from '@angular/core';
import { SocketIoConfig } from 'ngx-socket-io';

export const WEBSOCKET_CONFIG = new InjectionToken<SocketIoConfig>(
  'WEBSOCKET_CONFIG'
);
