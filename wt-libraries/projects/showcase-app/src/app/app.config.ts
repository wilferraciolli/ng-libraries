import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { environment } from '../environments/environment';
import { provideWebSocket } from 'wt-websockets';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    provideWebSocket({
      url: environment.websocketsUrl,
      options: {
        transports: ['websocket'], // forces websocket protocol
        reconnection: true, // if connection failure reconnect
        autoConnect: false, // do not connect on start up, only manual connection
        query: {
          accessKey: environment.accessKey
        }
      }
    })
  ]
};
