<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** AshMagill, pern-art-gallery, twitter_handle, ashmagillnewzealand@gmail.com, pern-art-gallery, A React website that displays images posted by a CMS, the routes in the server are secured with basic authentication. Uses a postgres database.
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">

  <h3 align="center">PERN Art Gallery</h3>

  <p align="center">
    A simple web page for displaying images, it comes with a CMS and a Server that uses basic auth middleware to protect CRUD operations
    <br />
    <a href="https://github.com/AshMagill/pern-art-gallery"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AshMagill/pern-art-gallery">View Demo</a>
    ·
    <a href="https://github.com/AshMagill/pern-art-gallery/issues">Report Bug</a>
    ·
    <a href="https://github.com/AshMagill/pern-art-gallery/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<details open="open">
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A while back I made my brother a simple one pager to showcase his artwork <a href="https://tylarwaterman.co.nz">tylarwaterman.co.nz</a>, 
it turned out ok, but I have to manually add images to the html whenever he makes new ones.

Im currently working on this PERN stack version of it so he can upload his images via CMS whenever he wants.

  <a href="https://raw.githubusercontent.com/AshMagill/Readme/main/images/Pern%20C4%20Diagram.png?token=AQZ3OBXAICRLYNCWHRXRGITAYA4OM">
  <p>Link to C4 diagram</p>
  </a>

### Built With
* [Postgres](https://www.postgresql.org/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [NodeJS](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com/)
* [Docker](https://hub.docker.com/_/postgres)
* [Argon2](https://www.npmjs.com/package/argon2)
* [JWT](https://jwt.io/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm 
  https://www.npmjs.com/get-npm

* Docker (to run postgres)
  https://docs.docker.com/engine/install/

* A database manager (I use Beekeeper)
  https://docs.beekeeperstudio.io/installation

### Installation

**I'm working on getting docker-compose set up at the moment, but this will work for now** 
<br>

(Also its never a good idea to share your postgres credentials on github if your repo is being deployed)

1. Clone the repo
   ```sh
   git clone git@github.com:AshMagill/pern-art-gallery.git
   ```
2. Individually CD into server, cms, website, and Install NPM packages 
   ```sh
   npm install
   ```
3. Spin up postgres with docker using your terminal
   ```sh
   docker run -d \
   --name  cms-server\
   -p 5432:5432 \
   -e POSTGRES_PASSWORD=password \
   -v cms-server:/var/lib/postgresql/data \
   -d \
   postgres
   ```
3. In your database manager, connect to the database with these credentials
   ```
   Connection Type: Postgres
   Host: Localhost
   Port: 5432
   User: postgres
   Password: password
   Default Database: postgres
   ```
7. In your database manager, install uuid-ossp extension
   ```
   create extension if not exists "uuid-ossp";
   ```
6. In your database manager, create the user table and the article table
   ```sh
   CREATE TABLE users (
   user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
   user_name VARCHAR(255) NOT NULL,
   user_email VARCHAR(255) NOT NULL,
   user_password VARCHAR(255) NOT NULL
   )
   ```
   ```sh
   CREATE table articles(
   article_id SERIAL PRIMARY KEY, 
   title VARCHAR(255),
   description VARCHAR(255),
   image VARCHAR(255)
   )
   ```
8. In your database manager, insert a user
   ```
   INSERT INTO users (user_name, user_email, user_password),
   VALUES('user','email@email.com','password')
   ```
2. Individually CD into server, cms, website, and start them
   <br>
   (you are running two clients, so when npm asks to run the second one in another port, say yes)
   ```sh
   npm start
   ```
3. Start up your browser and look up the localhosts the two clients are on
   ```
   localhost:3000
   localhost:3001
   ```
4. In the cms, log in with the user email and password we made earlier
   ```
   email: user@gmail.com
   password: password
   ```
<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Ash Magill - ashmagillnewzealand@gmail.com

Project Link: [https://github.com/AshMagill/pern-art-gallery](https://github.com/AshMagill/pern-art-gallery)

<!-- ACKNOWLEDGEMENTS -->
## Cool People 

* [The Developers Institute Whangarei](https://www.developers.ac.nz)
* [Vim](https://www.vim.org)
* [Arch Linux](https://archlinux.org/)
* [Larbs](https://github.com/LukeSmithxyz/LARBS)
* [Ben Awad](https://www.youtube.com/user/99baddawg)
* [Mental Outlaw](https://www.youtube.com/channel/UC7YOGHUfC1Tb6E4pudI9STA)
* [Libreboot](https://libreboot.org/)
* [Free Software Foundation (FSF)](https://www.fsf.org/)

## My Readme uses this template  
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AshMagill/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/AshMagill/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AshMagill/repo.svg?style=for-the-badge
[forks-url]: https://github.com/AshMagill/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/AshMagill/repo.svg?style=for-the-badge
[stars-url]: https://github.com/AshMagill/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/AshMagill/repo.svg?style=for-the-badge
[issues-url]: https://github.com/AshMagill/repo/issues
[license-shield]: https://img.shields.io/github/license/AshMagill/repo.svg?style=for-the-badge
[license-url]: https://github.com/AshMagill/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/AshMagill
