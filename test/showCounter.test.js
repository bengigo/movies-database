/**
 * @jest-environment jsdom
 */

import countShows from "../src/modules/__mocks__/showCounter.js";

test("Should count the number of shows", () => {
  document.body.innerHTML = `
     <section id="list">
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
     </section>
     `;
  expect(countShows()).toBe(5);
});
