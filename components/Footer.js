export default function(footer = 2019) {
return `<footer>
      <ul>
        <li class="link"><a href="./index.html">Home</a></li>
        <li class="link"><a href="./about/">About</a></li>
        <li class="link"><a href="./contact/">Contact</a></li>
        <li class="link"><a href="./gallery/">Gallery</a></li>
        <li class="link"><a href="./blog/">Blog</a></li>
      </ul>
      <p>&copy; ${footer} Justin Detjen &bullet; No rights reserved</p>
    </footer>
`;
}
