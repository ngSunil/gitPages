import { GitPagesPage } from './app.po';

describe('git-pages App', function() {
  let page: GitPagesPage;

  beforeEach(() => {
    page = new GitPagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
