const ulEl = document.querySelector('.ul-js');

export function createMarkup(data) {
  const markup = data.results.map(card =>
    `<li class="">
      <img  class="" src="${card.image}" alt="">
      <div  class="">
        <h3  class="">Name: ${card.name}</h3>
        <p  class="">Species: ${card.species}</p>
      </div>
    </li>`
  ).join('');
  ulEl.innerHTML = markup;
  // return console.log(markup);
}