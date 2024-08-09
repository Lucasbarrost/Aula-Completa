document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchRickyButton');
    const inputField = document.getElementById('rickyInput');
    const detailsContainer = document.getElementById('rickyDetails');

    fetchButton.addEventListener('click', () => {
        const query = inputField.value.trim();
        if (query) {
            fetchCharacterDetails(query);
        }
    });

    function fetchCharacterDetails(query) {
        fetch(`https://rickandmortyapi.com/api/character/${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    detailsContainer.innerHTML = '<p>Personagem não encontrado!</p>';
                } else {
                    detailsContainer.innerHTML = `
                        <h3>${data.name}</h3>
                        <img src="${data.image}" alt="${data.name}">
                        <p>Status: ${data.status}</p>
                        <p>Espécie: ${data.species}</p>
                        <p>Gênero: ${data.gender}</p>
                    `;
                }
            })
            .catch(error => {
                detailsContainer.innerHTML = '<p>Erro ao buscar dados!</p>';
            });
    }
});