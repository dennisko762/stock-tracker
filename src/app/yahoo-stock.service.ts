import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class YahooStockService {
  private api = 'https://api.polygon.io/v1/open-close/{0}/{date}?adjusted=true&apiKey=lEPTgeVLVfprrVSy8URUtYQoO9G8c_by'
  constructor(private httpClient: HttpClient) {}

  public getStockInformation(ticker: string, date: string) {
    let api = this.api
      .replace('{0}', ticker)
      .replace('{date}', date)
    return this.httpClient.get(api);
  }
}
