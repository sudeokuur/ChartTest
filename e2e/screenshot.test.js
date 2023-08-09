import { device } from 'detox';
import { takeScreenshot } from "../android/app/src/utils/screenshot.spec";

 const fs = require('fs');

describe('LineChartComponent', () => {
  beforeEach(async () => {
    await device.launchApp();
    
  });
  it('should take screenshots', async () => {
    takeScreenshot('line-chart');
  });
})
