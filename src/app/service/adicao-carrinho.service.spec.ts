import { TestBed } from '@angular/core/testing';

import { AdicaoCarrinhoService } from './adicao-carrinho.service';

describe('AdicaoCarrinhoService', () => {
  let service: AdicaoCarrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicaoCarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
