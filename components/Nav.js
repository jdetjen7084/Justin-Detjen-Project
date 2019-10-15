import { Links } from "../store"

function linksBuilder(links) {

  return links.map(link => `<li><a href="./${link}" data-navigo>${link}</a></li>`).join(" ");
  //had to put .join() in because commas showed up in the nav
  // let linksHTML = "";
  // for (let i = 0; i < links.length; i +=1) {
  //   linksHTML += `<li><a href="./${links[i]}">${links[i]}</a></li>`;
  // }
  //   return linksHTML;
}

export default () =>
  `<nav>
      <span class="fas fa-bars is-hidden--desktop"></span>
      <ul class="is-hidden--mobile is-hidden--tablet is-shown--desktop">
      ${linksBuilder(Links)}
      </ul>
    </nav>
`;

