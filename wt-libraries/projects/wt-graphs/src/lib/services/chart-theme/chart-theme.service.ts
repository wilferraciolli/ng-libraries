import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { BehaviorSubject } from 'rxjs';

export interface ChartTheme {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  gridColor: string;
}
// TODO theme not working as it needs a lot of subscriptions
// TODO theme not working as it needs a lot of subscriptions
// TODO theme not working as it needs a lot of subscriptions
// TODO theme not working as it needs a lot of subscriptions

@Injectable({
  providedIn: 'root'
})
export class ChartThemeService {
  private currentTheme = new BehaviorSubject<string>('light');
  public currentTheme$ = this.currentTheme.asObservable();

  private themes: { [key: string]: ChartTheme } = {
    light: {
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      textColor: '#333333',
      gridColor: 'rgba(0, 0, 0, 0.1)'
    },
    dark: {
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      textColor: '#ffffff',
      gridColor: 'rgba(255, 255, 255, 0.1)'
    },
    blue: {
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      textColor: '#2c3e50',
      gridColor: 'rgba(75, 192, 192, 0.1)'
    }
  };

  getCurrentTheme(): string {
    return this.currentTheme.value;
  }

  setTheme(themeName: string): void {
    if (!this.themes[themeName]) {
      throw new Error(`Theme '${themeName}' not found`);
    }
    this.currentTheme.next(themeName);
  }

  getSelectedTheme(themeName: string): Partial<ChartConfiguration> {
    const theme = this.themes[themeName];
    if (!theme) {
      throw new Error(`Theme '${themeName}' not found`);
    }

    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: theme.textColor,
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            backgroundColor:
              theme.textColor === '#ffffff'
                ? 'rgba(0, 0, 0, 0.8)'
                : 'rgba(255, 255, 255, 0.9)',
            titleColor: theme.textColor === '#ffffff' ? '#ffffff' : '#000000',
            bodyColor: theme.textColor === '#ffffff' ? '#ffffff' : '#000000'
          }
        },
        scales: {
          x: {
            ticks: {
              color: theme.textColor,
              font: {
                size: 11
              }
            },
            grid: {
              color: theme.gridColor
            },
            border: {
              color: theme.gridColor,
              display: true
            }
          },
          y: {
            ticks: {
              color: theme.textColor,
              font: {
                size: 11
              }
            },
            grid: {
              color: theme.gridColor
            },
            border: {
              color: theme.gridColor,
              display: true
            }
          }
        }
      }
    };
  }

  // Method to apply theme to existing chart instance
  applyThemeToChart(chart: Chart, themeName: string): void {
    const theme = this.themes[themeName];
    if (!theme || !chart) {
      return;
    }

    // Update chart options
    const themeConfig = this.getSelectedTheme(themeName);
    if (themeConfig.options) {
      Object.assign(chart.options, themeConfig.options);
    }

    // Update dataset styling
    chart.data.datasets.forEach((dataset, index) => {
      const datasetTheme = this.getDatasetTheme(themeName, index);
      Object.assign(dataset, datasetTheme);
    });

    // Trigger chart update
    chart.update('none'); // 'none' for no animation, or 'active' for animation
  }

  // Method to get theme colors for datasets with multiple color support
  getDatasetTheme(themeName: string, datasetIndex: number = 0) {
    const theme = this.themes[themeName];
    const colors = this.getColorVariations(theme, datasetIndex);

    return {
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      pointBackgroundColor: colors.pointBackgroundColor,
      pointBorderColor: '#ffffff', // Standard white for point borders
      pointHoverBackgroundColor: colors.borderColor,
      pointHoverBorderColor: '#ffffff',
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      tension: 0.1 // For smooth lines in line charts
    };
  }

  // Helper method to generate color variations for multiple datasets
  private getColorVariations(
    theme: ChartTheme,
    index: number
  ): {
    backgroundColor: string;
    borderColor: string;
    pointBackgroundColor: string;
  } {
    const variations = [
      {
        backgroundColor: theme.backgroundColor,
        borderColor: theme.borderColor,
        pointBackgroundColor: theme.borderColor
      },
      {
        backgroundColor: this.adjustColorOpacity(theme.borderColor, 0.3),
        borderColor: this.adjustColorBrightness(theme.borderColor, -20),
        pointBackgroundColor: this.adjustColorBrightness(theme.borderColor, -20)
      },
      {
        backgroundColor: this.adjustColorOpacity(theme.borderColor, 0.4),
        borderColor: this.adjustColorBrightness(theme.borderColor, 30),
        pointBackgroundColor: this.adjustColorBrightness(theme.borderColor, 30)
      }
    ];

    const variation = variations[index % variations.length];
    return {
      backgroundColor: variation.backgroundColor,
      borderColor: variation.borderColor,
      pointBackgroundColor: variation.pointBackgroundColor
    };
  }

  // Helper method to adjust color opacity
  private adjustColorOpacity(color: string, opacity: number): string {
    const match = color.match(/rgba?\(([^)]+)\)/);
    if (match) {
      const values = match[1].split(',').map(v => v.trim());
      if (values.length >= 3) {
        return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${opacity})`;
      }
    }
    return color;
  }

  // Helper method to adjust color brightness
  private adjustColorBrightness(color: string, amount: number): string {
    const match = color.match(/rgba?\(([^)]+)\)/);
    if (match) {
      const values = match[1].split(',').map(v => parseInt(v.trim()));
      if (values.length >= 3) {
        const r = Math.max(0, Math.min(255, values[0] + amount));
        const g = Math.max(0, Math.min(255, values[1] + amount));
        const b = Math.max(0, Math.min(255, values[2] + amount));
        const a = values.length > 3 ? values[3] : 1;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      }
    }
    return color;
  }

  // Get all available theme names
  getAvailableThemes(): string[] {
    return Object.keys(this.themes);
  }

  // Add a new custom theme
  addCustomTheme(name: string, theme: ChartTheme): void {
    this.themes[name] = theme;
  }
}
