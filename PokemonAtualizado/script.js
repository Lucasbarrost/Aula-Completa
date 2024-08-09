document.addEventListener('DOMContentLoaded', function () {
    const pokemonInput = document.getElementById('pokemonInput');
    const fetchPokemonButton = document.getElementById('fetchPokemonButton');
    const pokemonDetails = document.getElementById('pokemonDetails');

    fetchPokemonButton.addEventListener('click', function () {
        const pokemonNameOrId = pokemonInput.value.trim().toLowerCase();
        if (pokemonNameOrId === '') {
            alert('Por favor, digite o nome ou ID do Pokémon.');
            return;
        }

        pokemonDetails.innerHTML = '';

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokémon não encontrado');
                }
                return response.json();
            })
            .then(data => {
                const { name, id, types, abilities, sprites } = data;
                const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
                const pokemonId = id;
                const pokemonType = types.map(type => type.type.name).join(', ');
                const pokemonImage = sprites.front_default;
                const pokemonAbilities = abilities.map(ability => ability.ability.name).join(', ');

                pokemonDetails.innerHTML = `
                    <h2>${pokemonName} (#${pokemonId})</h2>
                    <p><strong>Tipo:</strong> ${pokemonType}</p>
                    <p><strong>Habilidades:</strong> ${pokemonAbilities}</p>
                    <img src="${pokemonImage}" alt="${pokemonName}" class="pokemon-image">
                `;
            })
            .catch(error => {
                console.error('Erro:', error);
                alert(error.message);
            });
    });
});