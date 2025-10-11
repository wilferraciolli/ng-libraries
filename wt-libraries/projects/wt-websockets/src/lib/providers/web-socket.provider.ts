import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  ModuleWithProviders
} from '@angular/core';

export function provideWebSocket(config: SocketIoConfig): EnvironmentProviders {
  const socketModule: ModuleWithProviders<SocketIoModule> =
    SocketIoModule.forRoot(config);

  return makeEnvironmentProviders([...(socketModule.providers || [])]);
}
