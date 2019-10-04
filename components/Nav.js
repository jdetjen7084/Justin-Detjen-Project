function linksBuilder(links) {
  let linksHTML = "";

  for (let i = 0; i < links.length; i +=1) {
    linksHTML += `<li><a href="./${links[i]}</a>${links[i]}</li>`;
  }
    return linksHTML;
}

export default function(st) {
  return `<nav>
      <span class="fas fa-bars is-hidden--desktop"></span>
      <ul class="is-hidden--mobile is-hidden--tablet is-shown--desktop">
      ${linksBuilder(st.links)}
      </ul>
    </nav>
`;
}
