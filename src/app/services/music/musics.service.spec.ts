import { TestBed, inject } from '@angular/core/testing';

import { MusicsService } from './musics.service';

describe('MusicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicsService]
    });
  });

  it('should be created', inject([MusicsService], (service: MusicsService) => {
    expect(service).toBeTruthy();
  }));
});
