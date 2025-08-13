export interface IDoughnutChartData {
  title: string;
  labels: Array<string>;
  values: Array<number>;
  backgroundColors: Array<string>;
  borderWidth: number;
  borderRadius: number;
  borderColors: Array<string>;
  hoverBackgroundColors: Array<string>;
  hoverOffset: number; // used to offset the piece when hover

  optionSpacing: number; // used to add space between bars
  optionCircumference: number; // used to make half doughnut
  optionRotation: number; // used to make half doughnut
  optionCutOut: number; // used to make doughnut thinner arcs
}
