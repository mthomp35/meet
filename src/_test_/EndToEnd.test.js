import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  /* https://www.ionos.com/digitalguide/hosting/technical-matters/err-connection-refused/
  https://github.com/puppeteer/puppeteer/issues/954
  */
  let browser;
  let page;
  jest.setTimeout(30000);

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
      ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event_details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .show-details');
    const eventDetails = await page.$('.event .event_details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event_details');
    expect(eventDetails).toBeNull();
  });

});

describe('filter events by city', () => {

  let browser;
  let page;
  jest.setTimeout(30000);

  beforeAll(async () => {

    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.CitySearch');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('When page is loaded, events from all cities are shown', async () => {
    const eventsShown = await page.$('.event');
    expect(eventsShown).toBeDefined();
  });

  test('User sees a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin');
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
  });

  test('User can select a city from the suggested list', async () => {
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
    await page.click('.suggestions li');
    expect('.event').toBeDefined();
  });
  
});