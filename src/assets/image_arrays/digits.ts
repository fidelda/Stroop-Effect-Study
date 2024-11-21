import type { SvgImage } from "@/interface";

import two5 from "@/assets/svgs/5x_5.svg";
import three4 from "@/assets/svgs/3x_4.svg";
import seven4 from "@/assets/svgs/7x_4.svg";
import five5 from "@/assets/svgs/5x_5.svg";
import four0 from "@/assets/svgs/4x_0.svg";
import seven9 from "@/assets/svgs/7x_9.svg";
import eight5 from "@/assets/svgs/8x_5.svg";
import five0 from "@/assets/svgs/5x_0.svg";
import three5 from "@/assets/svgs/3x_5.svg";
import eight9 from "@/assets/svgs/8x_9.svg";
import nine4 from "@/assets/svgs/9x_4.svg";
import three9 from "@/assets/svgs/3x_9.svg";
import nine0 from "@/assets/svgs/9x_0.svg";
import six4 from "@/assets/svgs/6x_4.svg";
import seven5 from "@/assets/svgs/7x_5.svg";
import five9 from "@/assets/svgs/5x_9.svg"; 
import four5 from "@/assets/svgs/4x_5.svg";
import six5 from "@/assets/svgs/6x_5.svg"; 
import four4 from "@/assets/svgs/4x_4.svg";
import six9 from "@/assets/svgs/6x_9.svg";

const digits: SvgImage[] = [
    { first: two5, second: three4, correct_img: 2 },    // 55 vs 444, Incongruent
    { first: seven4, second: five5, correct_img: 1 },   // 4444444 vs 55555, Incongruent
    { first: four0, second: three4, correct_img: 1 },   // 0000 vs 444, Incongruent
    { first: seven9, second: eight5, correct_img: 2 },  // 9999999 vs 55555555, Incongruent

    { first: five0, second: three5, correct_img: 1 },   // 00000 vs 555, Incongruent
    { first: eight9, second: nine4, correct_img: 2 },   // 99999999 vs 444444444, Incongruent
    { first: five0, second: three9, correct_img: 1 },   // 00000 vs 999, Incongruent
    { first: eight9, second: nine0, correct_img: 2 },   // 99999999 vs 000000000, Incongruent

    { first: six4, second: seven5, correct_img: 2 },    // 444444 vs 5555555, Congruent
    { first: three5, second: six4, correct_img: 2 },    // 555 vs 44444, Incongruent
    { first: four0, second: six4, correct_img: 2 },     // 0000 vs 444444, Congruent
    { first: five9, second: four5, correct_img: 1 },    // 99999 vs 5555, Congruent

    { first: four0, second: six5, correct_img: 2 },     // 0000 vs 55555, Congruent
    { first: seven9, second: four4, correct_img: 1 },   // 9999999 vs 4444, Congruent
    { first: five0, second: seven9, correct_img: 2 },   // 00000 vs 9999999, Congruent
    { first: six9, second: five0, correct_img: 1 }      // 999999 vs 00000, Congruent
];

export default digits