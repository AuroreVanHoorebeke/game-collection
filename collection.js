const category = [{
        name: 'FPS',
        style: 'tag is-info m-1'

    },

    {
        name: 'Digital collectible card games',
        style: 'tag is-primary m-1'

    },

    {
        name: 'Action-Adventure',
        style: 'tag is-success m-1'
    },

    {
        name: 'Sandbox',
        style: 'tag is-light m-1'
    },

    {
        name: 'Survival',
        style: 'tag is-dark m-1'
    },

    {
        name: 'TPS',
        style: 'tag is-link m-1'
    },

    {
        name: 'MMORPG',
        style: 'tag is-danger m-1'
    },

    {
        name: 'Action role-playing',
        style: 'tag is-warning m-1'
    }
];

const collection = [{
        title: 'Overwatch',
        developer: 'Blizzard Entertainment',
        category: [category[0]],
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg',
        link: 'https://www.youtube.com/watch?v=MujtyCr3UjY',
        description: 'Overwatch is a team-based FPS game published in 2016 in which the player can select a hero with its own unique gamestyle and abilities. Opposed to some other games of the same style, teammates can dynamically change heroes to adapt to what\'s needed in the game. Different modes are available, including competitive, classic games and arcade.'
    },

    {
        title: 'Hearthstone',
        developer: 'Blizzard Entertainment',
        category: [category[1]],
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Hearthstone_2016_logo.png/220px-Hearthstone_2016_logo.png',
        link: 'https://www.youtube.com/watch?v=VCyzHULCf9k',
        description: 'Hearthstone is a free-to-play collectible card game based on Blizzard\'s heroes of Warcraft. In this totally cross-platform card game (it is available on desktop, iOS and Android), you can play against friends or total strangers, in different modes ranging from regular one-on-one matches, ranked matches, to more arcade-like modes.'
    },

    {
        title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        category: [category[2]],
        image: 'https://www.nintendo.com/content/dam/noa/fr_CA/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg',
        link: 'https://www.youtube.com/watch?v=6pA0Ia0G9Ac',
        description: 'In this game of the series, you play an amnesic Link who just woke up after a hundred-years slumber caused by his last fight with Ganon. Your mission will be to find your memory back and travel across the kingdom of Hyrule to try and save the world and princess Zelda from Ganon.'
    },

    {
        title: 'Sea of Thieves',
        developer: 'Rare',
        category: [category[2]],
        image: 'https://upload.wikimedia.org/wikipedia/en/7/77/Sea_of_thieves_cover_art.jpg',
        link: 'https://www.youtube.com/watch?v=r5JIBaasuE8',
        description: 'Sea of Thieves is a multiplayer game where you can live your own pirate advanture, roaming the sea with up to 3 friends. On your journey, you\'ll look for treasures and battle with others on your way to become a Pirate Legend.'
    },

    {
        title: 'Minecraft',
        developer: 'Mojang Studios',
        category: [category[3], category[4]],
        image: 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft_image1280w.jpg',
        link: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
        description: 'In Minecraft, you explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks.'
    },

    {
        title: 'Star Wars Battlefront II',
        developer: 'EA Dice',
        category: [category[0], category[5]],
        image: 'https://upload.wikimedia.org/wikipedia/en/2/23/SWBF2_box.jpeg',
        link: 'https://www.youtube.com/watch?v=_q51LZ2HpbE',
        description: 'This reboot of Star Wars Battlefront II has single-player and multiplayer game modes. Gameplay is split in two main categories: ground battles and space battles. Both occur across three eras covered by the three Star Wars Trilogies.'
    },

    {
        title: 'Guild Wars II',
        developer: 'ArenaNet',
        category: [category[6]],
        image: 'https://image.jeuxvideo.com/images/jaquettes/00018092/jaquette-guild-wars-2-pc-cover-avant-g-1344324878.jpg',
        link: 'https://www.youtube.com/watch?v=Em0Sd60iI2w',
        description: 'Set in the fantasy world of Tyria, the game follows the re-emergence of Destiny\'s Edge, a disbanded guild dedicated to fighting the Elder Dragons, a Lovecraftian species that has seized control of Tyria in the time since the original Guild Wars. The game takes place in a persistent world with a story that progresses in instanced environments.'
    },

    {
        title: 'Cyberpunk 2077',
        developer: 'CD Projekt Red',
        category: [category[7], category[0]],
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
        link: 'https://www.youtube.com/watch?v=ixl31324UxE',
        description: 'Adapted from the Cyberpunk franchise, the story takes place in dystopian Night City, an open world with six distinct regions. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery, an arsenal of ranged weapons, and options for melee combat.'
    },

    {
        title: 'The Witcher 3 : Wild Hunt',
        developer: 'CD Projekt Red',
        category: [category[7]],
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
        link: 'https://www.youtube.com/watch?v=TZ_G6XiHoUA',
        description: 'The game takes place in a fictional fantasy world based on Slavonic mythology. Players control protagonist Geralt of Rivia, a monster slayer for hire known as a Witcher who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her.'
    },

    {
        title: 'Red Dead Redemption II',
        developer: 'Rockstar Studios',
        category: [category[2]],
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
        link: 'https://www.youtube.com/watch?v=F63h3v9QV7w',
        description: 'The story is set in 1899 in a fictionalized representation of the Western, Midwestern, and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries.'
    }
];

// HTML modification script

const columns = document.querySelector(".columns.is-mobile.is-multiline.is-marginless");
columns.innerHTML = "";

for (let element of collection) {
    const columnDiv = document.createElement("div");
    columnDiv.className = "column is-full-mobile is-one-quarter-tablet is-one-quarter-desktop is-narrow";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    //Card image section
    const cardImgDiv = document.createElement("div");
    cardImgDiv.className = "card-image";

    const cardImgFigure = document.createElement("figure");
    cardImgFigure.className = "image is-4by3";

    const cardImg = document.createElement("img");
    cardImg.src = element.image;

    //Card content section
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    for (let elem of element.category) {
        const tag = document.createElement("span");
        tag.textContent = elem.name;
        tag.className = elem.style;
        cardContent.appendChild(tag);
    }

    const media = document.createElement("div");
    media.className = "media";

    const mediaContent = document.createElement("div");
    mediaContent.className = "media-content";

    const titleCard = document.createElement("p");
    titleCard.className = "title is-4";
    titleCard.textContent = element.title;

    const dev = document.createElement("p");
    dev.className = "subtitle is-6";
    dev.textContent = element.developer;

    const description = document.createElement('p');
    description.className = "content";
    description.style.padding = '20px';
    description.textContent = element.description;

    //footer

    const cardFooter = document.createElement("footer");
    cardFooter.className = "card-footer is-flex";

    const linkFooter = document.createElement("a");
    linkFooter.className = "card-footer-item";
    linkFooter.src = element.link;
    linkFooter.target = "_blank";

    const fontAw = document.createElement("i");
    fontAw.className = "fab fa-youtube fa-2x is-centered is-justify-content-center";

    //Append child

    columns.appendChild(columnDiv);
    columnDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardImgDiv);
    cardImgDiv.appendChild(cardImgFigure);
    cardImgFigure.appendChild(cardImg);
    cardDiv.appendChild(cardContent);
    // cardContent.appendChild(tag);
    cardContent.appendChild(media);
    media.appendChild(mediaContent);
    mediaContent.appendChild(titleCard);
    mediaContent.appendChild(dev);
    cardContent.appendChild(description);
    cardContent.appendChild(cardFooter);
    cardFooter.appendChild(linkFooter);
    linkFooter.appendChild(fontAw);
};