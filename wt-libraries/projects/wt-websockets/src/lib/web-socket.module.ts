import { NgModule } from '@angular/core';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { WEBSOCKET_CONFIG } from './config/web-socket-config.token';

// This module was created just so consumer can pass configuration, note that this module must provide the WebSocketIo for it to work.
@NgModule({
  imports: [SocketIoModule],
  exports: [SocketIoModule]
})
export class WebSocketModule {
  static forRoot(config: SocketIoConfig) {
    return {
      ngModule: WebSocketModule,
      providers: [
        {
          provide: WEBSOCKET_CONFIG,
          useValue: config
        },
        ...(SocketIoModule.forRoot(config).providers || [])
      ]
    };
  }
}
