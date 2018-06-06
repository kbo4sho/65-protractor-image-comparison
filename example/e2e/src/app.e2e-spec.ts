import { AppPage } from './app.po';
import { browser } from 'protractor';
const protractorImageComparison = require('protractor-image-comparison');

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.protractorImageComparison = new protractorImageComparison({
        baselineFolder: './e2e/h1/vrt/baseline/',
        screenshotPath: './e2e/h1/vrt/.tmp/',
        autoSaveBaseline: true
    });
    browser.get('/');
    page = new AppPage();
  });

  it('should display welcome message', () => {
    expect(browser.protractorImageComparison.checkElement(page.getH1(), 'h1')).toEqual(0);
  });
});
