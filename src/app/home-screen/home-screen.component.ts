import { StockService } from '../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'open', 'close'];

  date: string;
  stockId;
  stocks = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockId = new FormGroup({
      symbol: new FormControl(''),
      stockDate: new FormControl(''),
    });
  }

  onChange(event) {
    this.stockService
      .getStockInformation(event.symbol, this.convertDate(this.date))
      .subscribe((stockInfo) => {
        let response: any;
        response = stockInfo;
        this.stocks.push(response);
      });
  }

  convertDate(str: string) {
    const momentDate = new Date(str);
    const formattedDate = moment(momentDate).format("YYYY-MM-DD");
    return formattedDate;
  }

  clearResults() {
    this.stocks = [];
  }
}
