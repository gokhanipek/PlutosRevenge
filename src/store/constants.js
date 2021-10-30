
//types
export const STATUS = "STATUS";
export const FIGHTING = "FIGHTING";
export const FIRE = "FIRE";
export const WATER = "WATER";
export const ICE = "ICE";
export const WIND = "WIND";
export const POISON = "POISON";

//genders
export const MALE = "MALE";
export const FEMALE = "FEMALE";

//signs
export const ARIES = "ARIES";
export const LIBRA = "LIBRA";
export const SCORPIO = "SCORPIO";
export const AQUARIOUS = "AQUARIOUS";
export const VIRGO = "VIRGO";
export const GEMINI = "GEMINI";
export const LION = "LION";


//planets
export const MERCURY = "MERCURY";
export const VENUS = "VENUS";
export const EARTH = "EARTH";
export const MARS = "MARS";
export const JUPITER = "JUPITER";
export const SATURN = "SATURN";
export const URANUS = "URANUS";
export const NEPTUNE = "NEPTUNE";
export const PLUTO = "PLUTO";

//action constants
export const START_GAME = "START_GAME";
export const SET_PLANET = "SET_PLANET";
export const SET_AWARD = "SET_AWARD";
export const SET_PLUTO_STATUS = "SET_PLUTO_STATUS";
export const SET_AVAILABLE_ATTACKS = "SET_AVAILABLE_ATTACKS";
export const SET_OPPONENT = "SET_OPPONENT";
export const SET_BATTLE_PLUTO = "SET_BATTLE_PLUTO";
export const SET_ORBIT = "SET_ORBIT";
export const SET_LAST_PLAYED = "SET_LAST_PLAYED";
export const SET_OPPONENT_DAMAGE = "SET_OPPONENT_DAMAGE";
export const SET_OPPONENT_ATTACK = "SET_OPPONENT_ATTACK";
export const REMOVE_PLANET = "REMOVE_PLANET";
export const UPDATE_PLANETS = "UPDATE_PLANETS";


//award attacks
export const defaultAttackAwards = [
    {
        name: 'Acid',
        type: POISON,
        damage: 50
    },
    {
        name: 'Punisher',
        type: FIGHTING,
        damage: 70
    },
    {
        name: 'Hyper Beam',
        type: FIRE,
        damage: 85
    },
    {
        name: 'Soul Breeze',
        type: ICE,
        damage: 100
    }
]

export const planetMercury = {
    id: 1,
    type: 'Planet',
    name: MERCURY,
    properties: {
        gender: FEMALE,
        speed: 100,
        size: 100,
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
                damage: 10
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
}

export const planetVenus = {
    id: 2,
    type: 'Planet',
    name: VENUS,
    properties: {
        gender: FEMALE,
        speed: 80,
        size: 150,
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
                damage: 10
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
}

export const planetEarth = {
    id: 3,
    type: 'Planet',
    name: EARTH,
    properties: {
        gender: MALE,
        speed: 70,
        size: 400,
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
                damage: 30
            },
            {
                name: 'Nukes',
                type: FIGHTING,
                damage: 250
            },
            {
                name: 'Water Cannon',
                type: WATER,
                damage: 100
            },
            {
                name: 'Magma Cannon',
                type: FIRE,
                damage: 200
            }
        ],
        background: 'Rockstar. Legend. Cool guy. Mr he who has it all! Does a bit of everything, has parasites named humans. He hates them but those parasites also help him with building new technologies and therefore weapons for him. Once upon a time, was such a sweetheart, but after involving with Cartels and dark businesses he is a dangerous planet to be around. Knows Mars is the only one that he can trust and the biggest weapon he can use when the time is right. Used to date Pluto.',
        orbitCount: 1
    }
}


export const planetMars = {
    id: 4,
    type: 'Planet',
    name: MARS,
    properties: {
        gender: MALE,
        speed: 60,
        size: 310,
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
                damage: 40
            },
            {
                name: 'Rover: Curiosity',
                type: FIGHTING,
                damage: 80
            },
            {
                name: 'Water Gun',
                type: WATER,
                damage: 150
            },
            {
                name: 'Volcano Cannon',
                type: FIRE,
                damage: 170
            }
        ],
        background: 'One of the cool guys in the universe. Kind of known as a side-kick to Earth but he does not really mind that. Takes pride of being the only other planet that humans(parasites) can live. As being childhood friends with Earth, he always goes to Earth aid if someone bother Earth. Deep inside he knows Earth will not do the same for him, tries not to think about it too much.',
        orbitCount: 1
    }
}

export const planetJupiter = {
    id: 5,
    type: 'Planet',
    name: JUPITER,
    properties: {
        gender: MALE,
        speed: 50,
        size: 2500,
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
                name: 'When I was your age, I used to respect my elders!',
                type: STATUS,
                damage: 1000
            },
        ],
        background: 'After thousands of years of glory days, Jupiter meditated a lot and has no interest in this life. He has his own spiritial world in his brain, and lives there. Some may say he got senile but you cant say it to his face. He will beat you with his sandal or worse, he will bore you with his wisdom... God forbid.',
        orbitCount: 10
    }
}

export const planetSaturn = {
    id: 6,
    type: 'Planet',
    name: SATURN,
    properties: {
        gender: FEMALE,
        speed: 60,
        size: 750,
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
                damage: 50
            },
            {
                name: 'F***ing SLAYER! \\m/',
                type: FIGHTING,
                damage: 400
            },
            {
                name: 'Iron Mine',
                type: WATER,
                damage: 500
            },
            {
                name: 'Mega Death!',
                type: FIRE,
                damage: 700
            }
        ],
        background: '6th planet, second biggest after Jupiter. Not that old though. Went to a concert once in an outer galaxy. A band named SATURNUS was playing. Instantly felt connected and become the biggest(no pun, he is huge) metalhead in the universe. After founding about the other metal bands, he studied thousands of years to perfect his attacks and named them after biggest metal bands in the universe. Fun guy to be around, not so fun to battle against. Constantly tells stories about how hard he danced in the moshpits. Wears a leather jacket with  around 5000 band patches on it. Does not like Kanye West and Fred Durst',
        orbitCount: 10
    }
}

export const planetUranus = {
    id: 7,
    type: 'Planet',
    name: URANUS,
    properties: {
        gender: MALE,
        speed: 30,
        size: 400,
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
                name: 'Knock, knock',
                type: ICE,
                damage: 40
            },
            {
                name: 'Cheesy Pick up Line',
                type: ICE,
                damage: 100
            },
            {
                name: 'Not Ice Breaker',
                type: ICE,
                damage: 20
            }
        ],
        background: 'Probably the weirdest guy in the universe. Has a thing for weird jokes. Likes to go out and socialise with other planets and stars. Even though most people hate him instantly, he has a mindset of Quantity, not quality, which is kinda working out well for him. Womanizer of the universe.',
        orbitCount: 2
    }
}

export const planetNeptune = {
    id: 8,
    type: 'Planet',
    name: NEPTUNE,
    properties: {
        gender: MALE,
        speed: 20,
        size: 370,
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
        background: 'When the Sun was organizing the positions of the planets, he got one of the worst spots, pretty far away from other planets to socialise and have friends. Which led him to become depressed in his early ages. Has pretty low self-esteem, envyies planets like Earth, Mars, platonically in love with Venus. Big Edgar Allen Poe and HP Lovecraft fan. Has tattoo of Cthulhu. Maybe that is why Venus and Mercury find him weird and stays away from.',
        orbitCount: 5
    }
}

export const planetPluto = {
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
                name: 'Comet Punch',
                type: FIGHTING,
                damage: 10
            }
        ],
        background: 'One of the cutest but also pissed creatures in the solar system and probably the whole universe. Around 10 years ago when she found out about dark businesses Earth got into, she dumped Earth and PASA(Pluto Annoyers and Space Administration, NASA literally changed their name to that.) of Earth decided to change Plutos status from a Planet to NOT a planet. This and also being far far far away from rest of the guys made her a lonely, sad, broken thing. She think to herself: What am I? Im not even a planet, what is there to live for? And she started drinking heavily, built an addiction for drinking and betting. Alone. Also being away from all the warmth of Sun, she become sick, sneezes constantly. After Sun announced he is losing his power to give warmth and will retire, she has only and ONLY purpose in this life. She will confront Earth and show it in his face.',
        orbitCount: 0
    }
}

export const PLANETS = [planetMercury, planetVenus, planetMars, planetEarth, planetJupiter, planetSaturn, planetUranus, planetNeptune, planetPluto];
