import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-widget',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.css']
})
export class CardWidgetComponent implements OnInit {

  previousWeekSales: number;
  currentWeekSales: number;
  previousWeekIncome : number;
  currentWeekIncome : number;
  previousWeekVisitors : number;
  currentWeekVisitors : number;
  currentWeekOrders : number;
  previousWeekOrders : number;

  constructor() { 
    this.previousWeekSales = 2000;
    this.currentWeekSales = 7000;
    this.previousWeekIncome = 6000;
    this.currentWeekIncome = 3100;
    this.previousWeekOrders = 2000;
    this.currentWeekOrders = 1600;
    this.previousWeekVisitors = 4054100;
    this.currentWeekVisitors = 8000;
  }

  calculateSalesDifference(): number {
    return this.currentWeekSales - this.previousWeekSales;
  }

  PercentageDifferenceSales(): number {
    const difference = this.calculateSalesDifference();
    var percentage = (difference / this.previousWeekSales) * 100;
    return parseFloat(percentage .toFixed(2));
  }


  calculateIncomeDifference(): number {
    return this.currentWeekIncome - this.previousWeekIncome;
  }

  PercentageDifferenceIncome(): number {
    const difference = this.calculateIncomeDifference();
    var percentage =  (difference / this.previousWeekIncome) * 100;
    return parseFloat(percentage .toFixed(2));
  }

  calculateOrdersDifference(): number {
    return this.currentWeekOrders - this.previousWeekOrders;
  }

  PercentageDifferenceOrders(): number {
    const difference = this.calculateOrdersDifference();
    var percentage =  (difference / this.previousWeekOrders) * 100;
    return parseFloat(percentage .toFixed(2));
  }

  calculateVisitorsDifference(): number {
    return this.currentWeekVisitors - this.previousWeekVisitors;
  }

  PercentageDifferenceVisitors(): number {
    const difference = this.calculateVisitorsDifference();
    var percentage  =  (difference / this.previousWeekVisitors) * 100;
    return parseFloat(percentage .toFixed(2));
  }

  ngOnInit(): any {

  }

}
