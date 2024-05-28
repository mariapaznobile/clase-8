fetch('https://rickandmortyapi.com/api/character')
  .then(function (response){
    return response.json ();
  })
  .then(function (data){
    const characterlistElement = document.querySelector('.characterlist');
    let characters = '';
    data.results.forEach(character => {
      characters += `
        <article>
          <img src="${character.image}" alt="${character.name}">
          <p>Name: ${character.name}</p>
          <p>Status: ${character.status}</p>
        </article>
      `;
    });
    characterlistElement.innerHTML = characters;
  })
  .catch(error => {
    console.error('Error fetching the characters:', error);
  });
