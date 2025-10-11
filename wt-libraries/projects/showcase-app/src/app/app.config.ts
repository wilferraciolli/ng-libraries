import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { WebSocketModule } from 'wt-websockets';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    importProvidersFrom(
      WebSocketModule.forRoot({
        url: 'http://localhost:3001',
        options: {
          transports: ['websocket'], // forces websocket protocol
          reconnection: true, // if connection failure reconnect
          autoConnect: false, // do not connect on start up, only manual connection
          query: {
            accessKey: 'secretKey'
          }
        }
      })
    )
    // importProvidersFrom(
    //   WebSocketModule.forRoot({
    //     url: environment.websocketsUrl,
    //     options: {
    //       transports: ['websocket'], // forces websocket protocol
    //       reconnection: true, // if connection failure reconnect
    //       autoConnect: false, // do not connect on start up, only manual connection
    //       query: {
    //         accessKey: environment.accessKey
    //       }
    //     }
    //   })
    // )
  ]
};
