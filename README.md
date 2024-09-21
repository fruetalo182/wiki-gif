# Wiki GIF 🎨

Wiki GIF is a simple gifs finder application using the Giphy API, built with a lightweight frontend and an Express.js backend. It allows users to search for gifs and copy their URL to the clipboard with a single click. 

## Tech Stack & Requirements 🛠️

- **Frontend**: HTML5, CSS3 (TailwindCSS), JavaScript (Vanilla).
- **Backend**: Node.js, Express.js, Axios (for Giphy API requests).
- **External Services**: Giphy API for GIFs.
- **Utilities**: dotenv for managing environment variables.

**Requirements**:
1. Node.js (v14 or higher).
2. Giphy API Key (obtain from [Giphy Developers](https://developers.giphy.com/)).
3. Tailwind CSS (included via CDN).

## Setup ⚙️

1. Clone this repository:
    ```bash
    git clone https://github.com/fruetalo182/wiki-gif.git
    cd wiki-gif
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory with your Giphy API key:
    ```plaintext
    GIPHY_API_KEY=************
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Open your browser at [http://localhost:3000](http://localhost:3000) to use the app.

