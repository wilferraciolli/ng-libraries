# WtGraphs
Library used to display graphs

## Build library in dev mode
To build this library in dev mode run
```bash
  ng build --watch
```


## Dependencies
### ng2-charts
This is a dependency to use charts js within Angular
First install it
```bash
    npm install ng2-charts --save
```
Then add the chart js script so graphs can be rendered
```bash
  npm install chart.js --save
```

Finally, within the project that wants to use it, it will need adding the provider to the bootstrap providers nad the diretive tot he component
```ts
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

bootstrapApplication(AppComponent, {
  providers: [provideCharts(withDefaultRegisterables())],
}).catch((err) => console.error(err));
```

  ```ts
import { BaseChartDirective } from 'ng2-charts';

@Component({
  standalone: true,
  imports: [BaseChartDirective],
})
export class MyComponent {}
```
