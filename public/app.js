const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');

const fetchGifs = async () => {
    const searchTerm = searchInput.value;
    const response = await fetch(`/api/gifs?search=${searchTerm}`);
    const gifs = await response.json();

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url; // gif url
        img.className = 'gif rounded-lg shadow-lg cursor-pointer';
        img.dataset.url = gif.images.fixed_height.url; // Save gif url

        img.addEventListener('click', () => {
            navigator.clipboard.writeText(gif.images.fixed_height.url).then(() => { // Copy gif url
                const copyMessage = document.getElementById('copy-message');
                copyMessage.classList.remove('hidden');
                setTimeout(() => {
                    copyMessage.classList.add('hidden');
                }, 3000);
            });
        });

        gifContainer.appendChild(img);
    });
};

searchButton.addEventListener('click', () => {
    fetchGifs();
    searchButton.classList.add('pressed');
    setTimeout(() => searchButton.classList.remove('pressed'), 100);
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchGifs();
        searchButton.classList.add('pressed');
        setTimeout(() => searchButton.classList.remove('pressed'), 100);
    }
});

function resetSearch() {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = ''; // Clear current gifs
    searchInput.value = ''; // Clear input text
    searchInput.focus(); // Focus input text
}
