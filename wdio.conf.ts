export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '13',
        'appium:deviceName': 'moto_g42',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './app.apk',
        'appium:autoGrantPermissions': true,
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    hostname: 'localhost',   // <-- ADD ESTA LINHA
    port: 4723,              // <-- ADD ESTA LINHA
    path: '/',               // <-- ADD ESTA LINHA
};
