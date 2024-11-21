import type { SvgImage } from "@/interface";

import twoFive from "@/assets/svgs/2x_five.svg";
import threeFour from "@/assets/svgs/3x_four.svg";
import sevenFour from "@/assets/svgs/7x_four.svg";
import fiveFive from "@/assets/svgs/5x_five.svg";
import fourZero from "@/assets/svgs/4x_zero.svg";
import sevenNine from "@/assets/svgs/7x_nine.svg";
import eightFive from "@/assets/svgs/8x_five.svg";
import fiveZero from "@/assets/svgs/5x_zero.svg";
import threeFive from "@/assets/svgs/3x_five.svg";
import eightNine from "@/assets/svgs/8x_nine.svg";
import nineFour from "@/assets/svgs/9x_four.svg";
import threeNine from "@/assets/svgs/3x_nine.svg";
import nineZero from "@/assets/svgs/9x_zero.svg";
import sixFour from "@/assets/svgs/6x_four.svg";
import sevenFive from "@/assets/svgs/7x_five.svg";
import fiveNine from "@/assets/svgs/5x_nine.svg";
import fourFive from "@/assets/svgs/4x_five.svg";
import sixFive from "@/assets/svgs/6x_five.svg";
import fourFour from "@/assets/svgs/4x_four.svg";
import sixNine from "@/assets/svgs/6x_nine.svg";

const words: SvgImage[] = [
    { first: twoFive, second: threeFour, correct_img: 2 },      // Incongruent
    { first: sevenFour, second: fiveFive, correct_img: 1 },     // Incongruent
    { first: fourZero, second: threeFour, correct_img: 1 },     // Incongruent
    { first: sevenNine, second: eightFive, correct_img: 2 },    // Incongruent

    { first: fiveZero, second: threeFive, correct_img: 1 },     // Incongruent
    { first: eightNine, second: nineFour, correct_img: 2 },     // Incongruent
    { first: fiveZero, second: threeNine, correct_img: 1 },     // Incongruent
    { first: eightNine, second: nineZero, correct_img: 2 },     // Incongruent

    { first: sixFour, second: sevenFive, correct_img: 2 },      // Congruent
    { first: threeFive, second: sixFour, correct_img: 2 },      // Incongruent
    { first: fourZero, second: sixFour, correct_img: 2 },       // Congruent
    { first: fiveNine, second: fourFive, correct_img: 1 },      // Congruent

    { first: fourZero, second: sixFive, correct_img: 2 },       // Congruent
    { first: sevenNine, second: fourFour, correct_img: 1 },     // Congruent
    { first: fiveZero, second: sevenNine, correct_img: 2 },     // Congruent
    { first: sixNine, second: fiveZero, correct_img: 1 }        // Congruent
];

export default words;