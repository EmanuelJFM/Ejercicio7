import { TestBed } from '@angular/core/testing';

import { InformationPatientService } from './information-patient.service';

describe('InformationPatientService', () => {
  let service: InformationPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
