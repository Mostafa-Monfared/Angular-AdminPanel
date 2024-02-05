import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
  dataLabels : ApexDataLabels;
  legend : ApexLegend;
};


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
        
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        fontFamily : 'vazirWithoutLatin', 
        height : 430, 
      },
      labels: ["زنجان", "تهران", "شیراز", "اصفهان", "تبریز"],
      legend: {
        position: "bottom",
        itemMargin: {
          horizontal: 10,
          vertical: 4,
        },
        markers: {
          width: 12,
          height: 12,
          radius: 12,
          offsetX: 5,
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        textAnchor: "start",
        distributed: true,
        offsetX: 10,
        offsetY: 10,
        style: {
          fontSize: "13px",
          fontFamily: "vazirWithoutLatin",
          fontWeight: "bold",
          colors: undefined,
        },
        background: {
          enabled: true,
          foreColor: "#FFF",
          padding: 0,
          borderRadius: 0,
          borderWidth: 0,
          borderColor: "",
          opacity: 0.0,
        },
        dropShadow: {
          enabled: false,
        },
      },
    };
   }

  ngOnInit(): any {
  }

}
