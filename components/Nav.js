export default function(nav) {
  return `<nav>
      <span class="fas fa-bars is-hidden--desktop"></span>
      <ul class="is-hidden--mobile is-hidden--tablet is-shown--desktop">
        <li class="link" id="none"><a href="./index.html">Home</a></li>
        <li class="link"><a href="./about/">About</a></li>
        <li class="link"><a href="./contact/">Contact</a></li>
        <li class="link"><a href="./gallery/">Gallery</a></li>
        <li class="link"><a href="./blog/">Blog</a></li>
      </ul>
    </nav>
`;
}

//todo: receive a list or links and dynamically build the navigation menu
