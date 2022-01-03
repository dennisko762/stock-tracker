import { TestBed } from '@angular/core/testing';

import { YahooStockService } from './yahoo-stock.service';

describe('YahooStockService', () => {
  let service: YahooStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YahooStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
