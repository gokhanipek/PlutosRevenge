export const SET_PLANET = "SET_PLANET";
export const STATUS = "STATUS";
export const FIGHTING = "FIGHTING";
export const FIRE = "FIRE";
export const WATER = "WATER";
export const ICE = "ICE";
export const WIND = "WIND";
export const POISON = "POISON";
export const MALE = "MALE";
export const FEMALE = "FEMALE";
export const ARIES = "ARIES";
export const LIBRA = "LIBRA";
export const SCORPIO = "SCORPIO";
export const AQUARIOUS = "AQUARIOUS";
export const VIRGO = "VIRGO";
export const GEMINI = "GEMINI";
export const LION = "LION";
export const MERCURY = "MERCURY";
export const VENUS = "VENUS";
export const EARTH = "EARTH";
export const MARS = "MARS";
export const JUPITER = "JUPITER";
export const SATURN = "SATURN";
export const URANUS = "URANUS";
export const NEPTUNE = "NEPTUNE";
export const PLUTO = "PLUTO";


export const PLANETS = [
    {
        id: 1,
        type: 'Planet',
        name: MERCURY,
        properties: {
            gender: FEMALE,
            speed: 100,
            size: 50,
            character: [
                {
                    style: 'Social Drinker',
                    level: 100
                },
                { 
                    style: 'Beauty',
                    level: 80 
                },
                { 
                    style: 'sign',
                    level: SCORPIO 
                }
            ],
            defenseResistance: 0,
            attacks: [
                {
                    name: 'Love Scent',
                    type: STATUS,
                    damage: null
                },
                {
                    name: 'Ember',
                    type: FIRE,
                    damage: 50
                }
            ],
            background: 'Top model of the solar system. Sun is in love with her, keep her on his side all the time. Likes to drink only cocktails when she goes out. Has the Love Scent that you will fall in love with. Only hangs out with the cool ones.',
            orbitCount: 0
        }
    },
    {
        id: 2,
        type: 'Planet',
        name: VENUS,
        properties: {
            gender: FEMALE,
            speed: 80,
            size: 75,
            character: [
                {
                    style: 'Social Drinker',
                    level: 30
                },
                { 
                    style: 'Beauty',
                    level: 100 
                },
                { 
                    style: 'Sign',
                    level: LIBRA 
                },
                {
                    style: 'Outgoing',
                    level: 100
                }
            ],
            defenseResistance: 0,
            attacks: [
                {
                    name: 'Love Scent',
                    type: STATUS,
                    damage: null
                },
                {
                    name: 'Acid',
                    type: POISON,
                    damage: 60
                }
            ],
            background: 'Known as the goddess of beauty, she has it all, she is cute, beautiful, loving, charming, clever, whatever features you name, she has it. Deep inside she thinks all the planets are in love with her. Just a bit jealous of Mercury as she is the number 1 of Sun. Drinks socially, she is a total Libra. When gets angry, she does not hesitate to throw Acid on your face.',
            orbitCount: 0
        }
    },
    {
        id: 3,
        type: 'Planet',
        name: EARTH,
        properties: {
            gender: MALE,
            speed: 70,
            size: 125,
            character: [
                {
                    style: 'Social Drinker',
                    level: 10
                },
                { 
                    style: 'Beauty',
                    level: 60 
                },
                { 
                    style: 'sign',
                    level: ARIES 
                }
            ],
            defenseResistance: 0,
            attacks: [
                {
                    name: 'Insult',
                    type: STATUS,
                    damage: 10
                },
                {
                    name: 'Nukes',
                    type: FIGHTING,
                    damage: 70
                },
                {
                    name: 'Water Cannon',
                    type: WATER,
                    damage: 80
                },
                {
                    name: 'Magma Cannon',
                    type: FIRE,
                    damage: 90
                }
            ],
            background: 'Rockstar. Legend. Cool guy. Mr he who has it all! Bitchy. Does a bit of everything, has parasites named humans. He hates them but those parasites also help him with building new technologies and therefore weapons for him. Once upon a time, was such a sweetheart, but after involving with Cartels and dark businesses he is a dangerous planet to be around. Knows Mars is the only one that he can trust and the biggest weapon he can use when the time is right. Used to date Pluto.',
            orbitCount: 1
        }
    },
    {
        id: 4,
        type: 'Planet',
        name: MARS,
        properties: {
            gender: MALE,
            speed: 60,
            size: 110,
            character: [
                {
                    style: 'Social Drinker',
                    level: 10
                },
                { 
                    style: 'Beauty',
                    level: 40 
                },
                { 
                    style: 'sign',
                    level: LION 
                }
            ],
            defenseResistance: 0,
            attacks: [
                {
                    name: 'Double Team',
                    type: STATUS,
                    damage: 10
                },
                {
                    name: 'Rover: Curiosity',
                    type: FIGHTING,
                    damage: 40
                },
                {
                    name: 'Water Gun',
                    type: WATER,
                    damage: 50
                },
                {
                    name: 'Volcano Cannon',
                    type: FIRE,
                    damage: 70
                }
            ],
            background: 'One of the cool guys in the universe. Kind of known as a side-kick to Earth but he does not really mind that. Takes pride of being the only other planet that humans(parasites) can live. As being childhood friends with Earth, he always goes to Earth aid if someone bother Earth. Deep inside he knows Earth will not do the same for him, tries not to think about it too much.',
            orbitCount: 1
        }
    },
    {
        id: 5,
        type: 'Planet',
        name: JUPITER,
        properties: {
            gender: MALE,
            speed: 50,
            size: 500,
            character: [
                { 
                    style: 'Beauty',
                    level: 10 
                },
                { 
                    style: 'sign',
                    level: AQUARIOUS 
                }
            ],
            defenseResistance: 0,
            attacks: [
                {
                    name: 'When I was your age, I used to respect my elders. Not trying to fight them! (Throws a sandal at your face)',
                    type: STATUS,
                    damage: null
                },
            ],
            background: 'After thousands of years of glory days, Jupiter meditated a lot and has no interest in this life. He has his own spiritial world in his brain, and lives there. Some may say he got senile but you cant say it to his face. He will beat you with his sandal or worse, he will bore you with his wisdom... God forbid.',
            orbitCount: 10
        }
    },
    {
        id: 6,
        type: 'Planet',
        name: SATURN,
        properties: {
            gender: FEMALE,
            speed: 60,
            size: 250,
            character: [
                { 
                    style: 'Beauty',
                    level: 50 
                },
                { 
                    style: 'sign',
                    level: LION 
                }
            ],
            defenseResistance: 1,
            attacks: [
                {
                    name: 'Double Team',
                    type: STATUS,
                    damage: 10
                },
                {
                    name: 'Planet F-ing SLAYER',
                    type: FIGHTING,
                    damage: 40
                },
                {
                    name: 'Iron Mine',
                    type: WATER,
                    damage: 50
                },
                {
                    name: 'Mega Death!',
                    type: FIRE,
                    damage: 70
                }
            ],
            background: '6th planet, second biggest after Jupiter. Not that old though. Went to a concert once in an outer galaxy. A band named SATURNUS was playing. Instantly felt connected and become the biggest(no pun, he is huge) metalhead in the universe. After founding about the other metal bands, he studied thousands of years to perfect his attacks and named them after biggest metal bands in the universe. Fun guy to be around, not so fun to battle against. Constantly tells stories about how hard he danced in the moshpits. Wears a leather jacket with  around 5000 band patches on it. Does not like Kanye West and Fred Durst',
            orbitCount: 10
        }
    },
    {
        id: 7,
        type: 'Planet',
        name: URANUS,
        properties: {
            gender: MALE,
            speed: 30,
            size: 200,
            character: [
                {
                    style: 'Social Drinker',
                    level: 100
                },
                { 
                    style: 'Beauty',
                    level: 60 
                },
                { 
                    style: 'sign',
                    level: GEMINI 
                }
            ],
            defenseResistance: 0,
            attacks: [
                {
                    name: 'Love Scent',
                    type: STATUS,
                    damage: 10
                },
                {
                    name: 'Ice Spear',
                    type: ICE,
                    damage: 40
                },
                {
                    name: 'Cheesy Pick up Line',
                    type: ICE,
                    damage: 60
                },
                {
                    name: 'Not Ice Breaker',
                    type: ICE,
                    damage: 40
                }
            ],
            background: 'Probably the weirdest guy in the universe. Has a thing for weird jokes. Likes to go out and socialise with other planets and stars. Even though most people hate him instantly, he has a mindset of Quantity, not quality, which is kinda working out well for him. Womanizer of the universe.',
            orbitCount: 2
        }
    },
    {
        id: 8,
        type: 'Planet',
        name: NEPTUNE,
        properties: {
            gender: MALE,
            speed: 20,
            size: 170,
            character: [
                {
                    style: 'Social Drinker',
                    level: -100
                },
                { 
                    style: 'Beauty',
                    level: 0 
                },
                { 
                    style: 'sign',
                    level: VIRGO 
                }
            ],
            defenseResistance: 0,
            attacks: [
                {
                    name: 'Stormy Day',
                    type: WIND,
                    damage: 30
                },
                {
                    name: 'Ice Spear',
                    type: ICE,
                    damage: 40
                },
                {
                    name: 'Water Cannon',
                    type: WATER,
                    damage: 60
                },
                {
                    name: 'Whining',
                    type: STATUS,
                    damage: 40
                }
            ],
            background: 'When the Sun was organizing the positions of the planets, he got one of the least spots, pretty far away from other planets to socialise and have friends. Which led him to become depressed in his early ages. Has pretty low self-esteem, envyies planets like Earth, Mars, platonically in love with Venus. Big Edgar Allen Poe and HP Lovecraft fan. Has tattoo of Cthulhu. Maybe that is why Venus and Mercury find him weird and stays away from him.',
            orbitCount: 5
        }
    },
    {
        id: 'Nobody Cares',
        type: 'NOT a Planet',
        name: PLUTO,
        properties: {
            gender: FEMALE,
            speed: 10,
            size: 10,
            character: [
                {
                    style: 'Social Drinker',
                    level: -100
                },
                { 
                    style: 'Beauty',
                    level: 100 
                },
                { 
                    style: 'sign',
                    level: VIRGO 
                },
                { 
                    style: 'Exiled by PASA?',
                    level: 'yes.' 
                }
            ],
            defenseResistance: 0,
            attacks: [
                {
                    name: 'Imagination',
                    type: STATUS,
                    damage: 0
                }
            ],
            background: 'One of the cutest but also pissed creatures in the solar system and probably the whole universe. Around 10 years ago when she found out about dark businesses Earth got into, she dumped Earth and PASA(Pluto Annoyers and Space Administration, NASA literally changed their name to that.) of Earth decided to change Plutos status from a Planet to NOT a planet. This and also being far far far away from rest of the guys made her a lonely, sad, broken thing. She think to himself: What am I, Im not even a planet, what is there to live for? And she started drinking heavily, built an addiction for drinking and betting. Alone. Also being away from all the warmth of Sun, she become sick, sneezes constantly. After Sun announced he is losing his power to give warmth and will retire, she has only and ONLY purpose in this life. She will confront Earth and show it in his face.', 
            orbitCount: 0
        }
    },

]
