import { device } from 'detox';

 const fs = require('fs');

describe('LineChartComponent', () => {
  beforeEach(async () => {
    await device.launchApp();
    
  });
  it('should compare two screenshots', async () => {
    const snapshottedImagePath = './e2e/assets/line-chart.png';
    const imagePath = await device.takeScreenshot('linechart');
    expectBitmapsToBeEqual(snapshottedImagePath, imagePath);
  });


})
function expectBitmapsToBeEqual(imagePath, expectedImagePath){
  const bitmapBuffer = fs.readFileSync(imagePath);
  const expectBitmapBuffer = fs.readFileSync(expectedImagePath);
  if(!bitmapBuffer.equals(expectBitmapBuffer)){
      throw new Error('Expected image at' + imagePath + ' to be equal to image at ' + expectedImagePath + ' but it was different!');
  }
}