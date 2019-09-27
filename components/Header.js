export default function(heading) {
  return `<header>
      <figure class="figure">
        <img
          srcset="
            https://picsum.photos/200,
            https://picsum.photos/300 1.5x,
            https://picsum.photos/400 2x,
            https://picsum.photos/600 3x
          "
          src="https://picsum.photos/200/300"
          alt="Lorem Picsum"
        />
        <h1>${heading}</h1>
      </figure>
    </header>
`;
}
