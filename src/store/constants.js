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
        name: MERCURY,
        properties: {
            gender: FEMALE,
            speed: 100,
            size: 50,
            character: [
                {social_drinker: 100},
                {beauty: 80},
                {sign: SCORPIO}
            ],
            defenseResistance: 0,
            attacks: [
                {
                    'Love Scent': {
                        type: STATUS,
                        damage: null
                    },
                    'Ember': {
                        type: FIRE,
                        damage: 50
                    }
                }   
            ],
            orbitCount: 0
        }
    },
    {
        name: VENUS,
        properties: {
            gender: FEMALE,
            speed: 80,
            size: 75,
            character: [
                {social_drinker: 30},
                {beauty: 100},
                {sign: LIBRA}
            ],
            defenseResistance: 0,
            attacks: [
                {
                    'Love Scent': {
                        type: STATUS,
                        damage: null
                    },
                    'Acid': {
                        type: POISON,
                        damage: 60
                    }
                }
            ],
            orbitCount: 0
        }
    },
    {
        name: EARTH,
        properties: {
            gender: MALE,
            speed: 70,
            size: 125,
            character: [
                {social_drinker: 10},
                {beauty: 60},
                {sign: ARIES}
            ],
            defenseResistance: 0,
            attacks: [
                {
                    'Insult': {
                        type: STATUS,
                        damage: 10
                    },
                    'Nukes': {
                        type: FIGHTING,
                        damage: 70
                    },
                    'Water Cannon': {
                        type: WATER,
                        damage: 80
                    },
                    'Magma Cannon': {
                        type: FIRE,
                        damage: 90
                    }
                }
            ],
            orbitCount: 1
        }
    },
    {
        name: MARS,
        properties: {
            gender: MALE,
            speed: 60,
            size: 110,
            character: [
                {social_drinker: 10},
                {beauty: 40},
                {sign: LION}
            ],
            defenseResistance: 0,
            attacks: [
                {
                    'Double Team': {
                        type: STATUS,
                        damage: 10
                    },
                    'Rover: Curiosity': {
                        type: FIGHTING,
                        damage: 40
                    },
                    'Water Gun': {
                        type: WATER,
                        damage: 50
                    },
                    'Volcano Cannon': {
                        type: FIRE,
                        damage: 70
                    }
                }
            ],
            orbitCount: 1
        }
    },
    {
        name: JUPITER,
        properties: {
            gender: MALE,
            speed: 50,
            size: 500,
            character: [
                {social_drinker: 0},
                {beauty: 0},
                {sign: AQUARIOUS}
            ],
            defenseResistance: 0,
            attacks: [
                {
                    'When I was': {
                        type: STATUS,
                        damage: null
                    },
                    'at your age': {
                        type: FIGHTING,
                        damage: 100
                    },
                    'I used to': {
                        type: POISON,
                        damage: 100
                    },
                    'respect my elders': {
                        type: STATUS,
                        damage: 100
                    }
                }
            ],
            orbitCount: 10
        }
    },
    {
        name: SATURN,
        properties: {
            gender: FEMALE,
            speed: 60,
            size: 250,
            character: [
                {social_drinker: 0},
                {beauty: 50},
                {sign: LION}
            ],
            defenseResistance: 1,
            attacks: [
                {
                    'Double Team': {
                        type: STATUS,
                        damage: 10
                    },
                    'Metal Ballad': {
                        type: FIGHTING,
                        damage: 40
                    },
                    'Iron Mine': {
                        type: WATER,
                        damage: 50
                    },
                    'Mega Death!': {
                        type: FIRE,
                        damage: 70
                    }
                }
            ],
            orbitCount: 10
        }
    },
    {
        name: URANUS,
        properties: {
            gender: MALE,
            speed: 30,
            size: 200,
            character: [
                {social_drinker: 100},
                {beauty: 60},
                {sign: GEMINI}
            ],
            defenseResistance: 0,
            attacks: [
                {
                    'Love Scent': {
                        type: STATUS,
                        damage: 10
                    },
                    'Ice Spear': {
                        type: ICE,
                        damage: 40
                    },
                    'Cheesy Pick up Line': {
                        type: ICE,
                        damage: 60
                    },
                    'Not Ice Breaker': {
                        type: ICE,
                        damage: 40
                    }
                }
            ],
            orbitCount: 2
        }
    },
    {
        name: NEPTUNE,
        properties: {
            gender: MALE,
            speed: 20,
            size: 170,
            character: [
                {social_drinker: 0},
                {beauty: 0},
                {sign: VIRGO}
            ],
            defenseResistance: 0,
            attacks: [
                {
                    'Stormy Day': {
                        type: WIND,
                        damage: 30
                    },
                    'Ice Spear': {
                        type: ICE,
                        damage: 40
                    },
                    'Water Cannon': {
                        type: WATER,
                        damage: 60
                    },
                    'Whining': {
                        type: STATUS,
                        damage: 40
                    }
                }
            ],
            orbitCount: 5
        }
    },
    {
        name: PLUTO,
        properties: {
            gender: FEMALE,
            speed: 10,
            size: 10,
            character: [
                {social_drinker: -100},
                {beauty: 100},
                {sign: VIRGO},
                {exiled_by_PASA: 'Unfortunately...'},
            ],
            defenseResistance: 0,
            attacks: [
                {
                    'Imagination': {
                        type: STATUS,
                        damage: 0
                    }
                }
            ],
            orbitCount: 0
        }
    },
    
]
