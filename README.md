

<div align="center">
    
<h1>Wiki GIF 👾</h1>
    
  [![CI Status](https://img.shields.io/github/actions/workflow/status/fruetalo182/wiki-gif/ci.yaml?branch=main&label=CI%20Status)](https://github.com/fruetalo182/wiki-gif/actions/workflows/ci.yaml)
  
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
  ![Node.js](https://img.shields.io/badge/Node.js-8CC84B?style=flat&logo=nodedotjs&logoColor=white)
  ![Express](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white)
  ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
  ![Giphy API](https://img.shields.io/badge/Giphy%20API-ff69b4?style=flat&logo=giphy&logoColor=white)
  ![dotenv](https://img.shields.io/badge/dotenv-11B48D?style=flat&logo=dotenv&logoColor=white)

</div>

Wiki GIF is a simple gif finder application using the Giphy API, built with a lightweight frontend and an Express.js backend. It allows users to search for gifs and copy their URL to the clipboard with a single click. 


## 📋 Requirements

- **Node version:** 14 or higher
- **Giphy API Key (Only for local setup):** Generate it from [Giphy Developers](https://developers.giphy.com/)


## ⚙️ Local setup

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

## 🐳 Docker setup

To run the Wiki GIF application using Docker, follow these steps:

1. **Pull the Docker image**:

    ```bash
    docker pull fruetalo/wiki-gif:latest
    ```
    Or
    ```bash
    docker pull ghcr.io/fruetalo182/wiki-gif:latest
    ```

2. **Run the Docker container**:

    ```bash
    docker run -p 3000:3000 wiki-gif
    ```

3. **Access the application** at [http://localhost:3000](http://localhost:3000).

## 🏷️ Container Registry
- [Github Packages](https://github.com/users/fruetalo182/packages/container/package/wiki-gif)
- [Docker Hub](https://hub.docker.com/r/fruetalo/wiki-gif)

## 📸 Screenshots
![Search](media/search.png)
![Result](media/result.png)

