import { by, element } from 'protractor';

export class AppPage {

    getH1() {
        return element(by.css('h1'));
    }
}
