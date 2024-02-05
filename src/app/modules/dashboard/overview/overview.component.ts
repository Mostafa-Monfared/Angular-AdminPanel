import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  
  constructor() {
    
    this.chartOptions = {
      series: [
        {
          name: "سود خالص",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66 , 25 , 34 , 53]
        },
        {
          name: "درآمد",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94 , 115 , 96 , 118]
        },
        {
          name: "نقدینگی",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41 , 25 , 56 , 75]
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        fontFamily : 'vazirWithoutLatin'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر ",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ]
      },
      legend: {
        position: "bottom",
        itemMargin: {
          horizontal: 10,
          vertical: 4,
        },
        markers: {
          width: 12,
          height: 12,
          radius: 4,
          offsetX: 4,
        },
      },
    };
    
   }

  ngOnInit(): void {
  }

}
