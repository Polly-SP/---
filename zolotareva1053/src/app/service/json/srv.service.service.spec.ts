import { TestBed } from '@angular/core/testing';

import { Srv.ServiceService } from './srv.service.service';

describe('Srv.ServiceService', () => {
  let service: Srv.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Srv.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
