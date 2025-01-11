// Animation section histoire
const date_history = document.querySelectorAll(".date_histoire");
const date_1994 = document.getElementById("1994");
const date_2006 = document.getElementById("2006");
const date_2020 = document.getElementById("2020");
const date_2000 = document.getElementById("2000");
const date_2013 = document.getElementById("2013");
let container_text = document.querySelector(".subcontainer-text_histoire");



function Changement_texte(texte, element) {
    date_history.forEach((el) => el.classList.remove('active'));
    element.classList.add('active');
    container_text.textContent = texte;
}

date_2006.addEventListener("click", () => {
    Changement_texte(`Lancement de la PlayStation 3 (PS3) La PlayStation 3 (PS3), lancée le 11 novembre 2006 au Japon, a introduit des innovations majeures, notamment un lecteur Blu-ray permettant des graphismes haute définition et un espace de stockage accru. Elle a également mis en avant le PlayStation Network (PSN), offrant la possibilité de jouer en ligne, télécharger des jeux et interagir avec une communauté mondiale.
Malgré un lancement difficile dû à son prix élevé et à la concurrence de la Xbox 360, la PS3 a séduit grâce à ses exclusivités légendaires, telles que The Last of Us, Uncharted et God of War III, qui ont redéfini les standards du jeu vidéo. La PS3 a aussi popularisé les trophées en jeu, offrant une nouvelle forme de compétition et d’engagement pour les joueurs.
Avec plus de 87 millions d’unités vendues, la PS3 a rapidement trouvé sa place parmi les consoles les plus influentes de son époque, consolidant la position de Sony sur le marché et marquant un jalon important dans l’histoire des jeux vidéo.`, date_2006);
});
date_1994.addEventListener("click", () => {
    Changement_texte(`Sony a lancé la première PlayStation au Japon le 3 décembre 1994, marquant le début d'une nouvelle ère dans l'industrie du jeu vidéo. Cette console a vu le jour après l’échec d’une collaboration entre Sony et Nintendo, qui devait aboutir à la création d’un lecteur CD pour la Super Nintendo. En réponse à cet échec, Sony a décidé de se lancer seul dans l’aventure du jeu vidéo, et la PlayStation a rapidement fait ses preuves en offrant une technologie avant-gardiste.
Révolutionnaire pour son époque, elle proposait des jeux en 3D sur CD-ROM, une avancée majeure par rapport aux cartouches utilisées jusque-là. Cette innovation a permis aux développeurs de créer des univers plus riches et détaillés, marquant un tournant dans le divertissement interactif. Des titres emblématiques comme Final Fantasy VII, Tekken et Crash Bandicoot ont non seulement redéfini les standards du jeu vidéo, mais ont également fidélisé des millions de joueurs à travers le monde. Avec plus de 100 millions d'unités vendues, la PlayStation a profondément changé l'industrie et a cimenté son héritage en tant que pionnière du gaming moderne.`, date_1994);
});
date_2020.addEventListener("click", () => {
    Changement_texte(`Lancement de la PlayStation 5 (PS5) Le 12 novembre 2020, Sony a lancé la PlayStation 5, une console révolutionnaire qui a redéfini les standards de la nouvelle génération de jeux vidéo. Grâce à son processeur ultra-puissant, son SSD ultra-rapide et son support du ray tracing, la PS5 a offert des graphismes d’une qualité inédite et des temps de chargement quasi inexistants, propulsant ainsi l'expérience de jeu à un niveau supérieur.
La PS5 est également rétrocompatible avec la majorité des jeux PS4, garantissant une transition en douceur pour les joueurs. Parmi ses exclusivités marquantes, Demon’s Souls, Ratchet & Clank: Rift Apart et Spider-Man: Miles Morales ont pleinement exploité la puissance de la console, offrant des mondes ouverts et dynamiques aux graphismes époustouflants.
Bien que la pandémie de COVID-19 ait causé des difficultés d'approvisionnement, la PS5 a rapidement rencontré un énorme succès commercial et critique. En peu de temps, elle est devenue l'une des consoles les plus recherchées et les plus appréciées, consolidant la position de Sony comme leader dans l’industrie du jeu vidéo.`, date_2020);
});
date_2000.addEventListener("click", () => {
    Changement_texte(`Sortie de la PlayStation 2 (PS2) Lancée le 4 mars 2000 au Japon, la PlayStation 2 (PS2) a marqué un tournant dans l’histoire du jeu vidéo, consolidant la position dominante de Sony. Avec son lecteur DVD intégré, elle combinait console de jeu et lecteur multimédia, rendant la technologie DVD accessible à de nombreux foyers et contribuant à son succès massif.
Son catalogue de jeux varié, comprenant des titres légendaires comme GTA: San Andreas, Shadow of the Colossus et Metal Gear Solid 2, a captivé des millions de joueurs, tandis que des franchises cultes comme Final Fantasy et Gran Turismo ont renforcé son attrait.
Grâce à sa longévité, ses baisses de prix progressives et sa compatibilité avec les jeux de la première PlayStation, la PS2 a continué de séduire les joueurs pendant des années. Avec plus de 155 millions d’unités vendues, elle reste la console la plus écoulée de tous les temps, laissant une empreinte indélébile sur l’histoire des jeux vidéo.`, date_2000);
});
date_2013.addEventListener("click", () => {
    Changement_texte(`Sortie de la PlayStation 4 (PS4) Le 15 novembre 2013, Sony a lancé la PlayStation 4, une console révolutionnaire qui a redéfini l'expérience de jeu. Avec une puissance de traitement exceptionnelle, elle a offert des graphismes de haute qualité et des mondes de jeu plus immersifs. Son interface intuitive permettait une navigation fluide entre les jeux, les applications et les fonctionnalités sociales.
La PS4 a également transformé l'interaction entre les joueurs grâce au bouton "Share" sur la manette, permettant de capturer, diffuser et partager ses moments de jeu en temps réel. Cela a renforcé la dimension sociale du gaming et ouvert la voie à une nouvelle forme de création de contenu.
Avec des exclusivités marquantes telles que Horizon Zero Dawn, Spider-Man, Bloodborne et The Last of Us Part II, la PS4 a capturé l'imaginaire des joueurs. Son succès commercial a été fulgurant, atteignant plus de 116 millions d’unités vendues, faisant d'elle l'une des consoles les plus populaires et influentes de l'histoire du jeu vidéo.`, date_2013);
});

// Animation section selection_Playstation
const itemsJeux = document.querySelectorAll(".subcontainer-jeu-container_selection_playstation");
const itemActive = document.querySelector(".cover");
const itemsInactive = document.querySelectorAll(".corner");
itemActive.classList.add("active2")

itemsJeux.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("active2"); 
        itemActive.classList.remove("active2");
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("active2");
        itemActive.classList.add("active2");
    });
});

// responsive
const mediaQuery = window.matchMedia("(max-width: 600px)");
const txt_actualities = document.querySelector(".text1")

function updateText(e) {
    if (e.matches) {
      txt_actualities.textContent = `La PS5 édition 30 ans est bien plus qu’une simple console : c’est une célébration de trois décennies qui ont marqué l’histoire du jeu vidéo et transformé l’industrie. Conçue pour rendre hommage à l’héritage de PlayStation, cette édition limitée se distingue par un design unique et raffiné, reflétant l’évolution et l’impact de la marque depuis 1994. <br>

                        Avec ses lignes élégantes et ses détails exclusifs, elle évoque les moments marquants qui ont défini PlayStation, tout en offrant des performances exceptionnes.`;
    } else {
      txt_actualities.textContent = `La PS5 édition 30 ans est bien plus qu’une simple console : c’est une célébration de trois décennies qui ont marqué l’histoire du jeu vidéo et transformé l’industrie. Conçue pour rendre hommage à l’héritage de PlayStation, cette édition limitée se distingue par un design unique et raffiné, reflétant l’évolution et l’impact de la marque depuis 1994. <br>
                                        Avec ses lignes élégantes et ses détails exclusifs, elle évoque les moments marquants qui ont défini PlayStation, tout en offrant des performances exceptionnelles : graphismes époustouflants, fluidité incomparable et technologies de pointe comme le ray tracing et la 4K.  <br>
                                        Cette console est bien plus qu’un outil de divertissement, c’est une pièce de collection pour les passionnés de technologie et d’histoire vidéoludique.`;
    }
}
updateText(mediaQuery);
mediaQuery.addEventListener("change", updateText);


