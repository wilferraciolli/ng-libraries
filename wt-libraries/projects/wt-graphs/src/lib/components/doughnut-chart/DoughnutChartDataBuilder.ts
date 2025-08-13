import { IDoughnutChartData } from './IDoughnutChartData';

export class DoughnutChartDataBuilder {
  private data: IDoughnutChartData;

  constructor() {
    this.data = {
      title: '',
      labels: [],
      values: [],
      backgroundColors: [],

      borderWidth: 2,
      borderRadius: 0,
      borderColors: [],

      hoverBackgroundColors: [],
      hoverOffset: 10,

      optionSpacing: 10,
      optionCircumference: 360,
      optionRotation: 0,
      optionCutOut: 90
    };
  }

  public static createFullDoughnut(): DoughnutChartDataBuilder {
    return new DoughnutChartDataBuilder();
  }

  public static createHalfDoughnut(): DoughnutChartDataBuilder {
    let doughnutChartDataBuilder: DoughnutChartDataBuilder =
      new DoughnutChartDataBuilder();
    doughnutChartDataBuilder.data.optionCircumference = 180;
    doughnutChartDataBuilder.data.optionRotation = 270;

    return doughnutChartDataBuilder;
  }

  public graphTitle(value: string): DoughnutChartDataBuilder {
    this.data.title = value;
    return this;
  }

  public graphLabels(values: Array<string>): DoughnutChartDataBuilder {
    this.data.labels = values;
    return this;
  }

  public values(values: Array<number>): DoughnutChartDataBuilder {
    this.data.values = values;
    return this;
  }

  public backgroundColours(values: Array<string>): DoughnutChartDataBuilder {
    this.data.backgroundColors = values;
    return this;
  }

  public build(): IDoughnutChartData {
    return this.data;
  }
}
