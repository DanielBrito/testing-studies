import { checkAppTitle, goToApp } from "../../helpers";

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given(`I am a bookish user`, () => {
  //
});

When(`I open the list page`, () => {
  goToApp();
});

Then(`I can see the title {string} is showing`, (title) => {
  checkAppTitle(title);
});
