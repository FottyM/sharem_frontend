import { SharemPage } from './app.po';

describe('sharem App', function() {
  let page: SharemPage;

  beforeEach(() => {
    page = new SharemPage();
  });

  it('should display message saying SHAREM', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SHAREM');
  });
});
