import Slice1 from '../assets/images/slice1.png';
import Slice2 from '../assets/images/slice2.png';
import hp10 from '../assets/images/hp10.png';
import hp10minus from '../assets/images/hp10minus.png';
import hp50minus from '../assets/images/hp50minus.png';
import hp90minus from '../assets/images/hp90minus.png';
import hp100 from '../assets/images/hp100.png';
import hp250 from '../assets/images/hp250.png';
import rockets from '../assets/images/rockets.png';

export const SIZE_AWARD = 'size';
export const ATTACK_AWARD = 'attack';

/**
 * The wheel's awards, in slice order. Artwork lives on the award itself so a
 * slice can never depict something other than what it grants: the wheel is
 * generated from this table, and the spin result is an index into it.
 */
export const AWARDS = [
    { kind: SIZE_AWARD, effect: -10, message: 'You lost -10 size!', image: hp10minus },
    { kind: SIZE_AWARD, effect: 10, message: 'You won +10 size upgrade!', image: hp10 },
    { kind: SIZE_AWARD, effect: 250, message: 'You won +250 size upgrade!', image: hp250 },
    { kind: SIZE_AWARD, effect: 100, message: 'You won +100 size upgrade!', image: hp100 },
    { kind: SIZE_AWARD, effect: -90, message: 'You lost -90 size!', image: hp90minus },
    { kind: ATTACK_AWARD, effect: 0, message: 'You won a new attack!', image: rockets },
    { kind: SIZE_AWARD, effect: -50, message: 'You lost -50 size!', image: hp50minus },
    { kind: SIZE_AWARD, effect: -10, message: 'You lost -10 size!', image: hp10minus },
    { kind: SIZE_AWARD, effect: 10, message: 'You won +10 size upgrade!', image: hp10 },
    { kind: ATTACK_AWARD, effect: 0, message: 'You won a new attack!', image: rockets },
].map((award, index) => ({ id: index + 1, ...award }));

/** Wheel slices, one per award, in the same order. */
export const WHEEL_SLICES = AWARDS.map((award, index) => ({
    id: award.id,
    sliceImageUrl: award.image,
    backgroundImageUrl: index % 2 === 0 ? Slice1 : Slice2,
}));

export const awardAtIndex = index => AWARDS[index];

export const isAttackAward = award => Boolean(award) && award.kind === ATTACK_AWARD;
