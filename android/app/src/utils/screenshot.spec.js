/* eslint no-undef: 0 */
const { execSync } = require('child_process');
const fs = require('fs');
const OPTIONS = {
  timeout: 10000,
  killSignal: 'SIGKILL',
};

export const takeScreenshot = (name) => {
  const fileName = name.endsWith('.png') ? name : `${name}.png`; 

  if (device.getPlatform() === 'android') {
    execSync(`adb shell screencap /sdcard/${fileName}`, OPTIONS);
    execSync(
      `adb pull /sdcard/${fileName} $(pwd)/e2e/assets/`,
      OPTIONS,
    );
  } else {  // for iOS
    execSync(
      `xcrun simctl io booted screenshot $(pwd)/e2e/assets/${fileName}`,
      OPTIONS,
    );
  }
};
