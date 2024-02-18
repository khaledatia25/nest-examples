import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  copmute(a: number, b: number) {
    console.log('Drawing 10 watss of power from power service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
