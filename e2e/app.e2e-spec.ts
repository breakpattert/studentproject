import { StudentServerPage } from './app.po';

describe('student-server App', () => {
  let page: StudentServerPage;

  beforeEach(() => {
    page = new StudentServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
