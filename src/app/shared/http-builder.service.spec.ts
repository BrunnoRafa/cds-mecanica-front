import { TestBed } from '@angular/core/testing';
import { HttpBuilder } from './http-builder.service';

describe('HttpBuilder', () => {
  let service: HttpBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
