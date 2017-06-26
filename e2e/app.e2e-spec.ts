import { CAMGridPage } from './app.po';

describe('camgrid App', () => {
  let page: CAMGridPage;

  beforeEach(() => {
    page = new CAMGridPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
