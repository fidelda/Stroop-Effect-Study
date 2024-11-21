import type { SvgImage } from "@/interface";

// WW vs GGG
import twoW from "@/assets/svgs/2x_W.svg";
import threeG from "@/assets/svgs/3x_G.svg";

// PPPPPPP vs SSSSS
import sevenP from "@/assets/svgs/7x_P.svg";
import fiveS from "@/assets/svgs/5x_S.svg";

// HHHH vs DDD
import fourH from "@/assets/svgs/4x_H.svg";
import threeD from "@/assets/svgs/3x_D.svg";

// KKKKKKK vs EEEEEEEE
import sevenK from "@/assets/svgs/7x_K.svg";
import eightE from "@/assets/svgs/8x_E.svg";

// HHHHH vs WWW
import fiveH from "@/assets/svgs/5x_H.svg";
import threeW from "@/assets/svgs/3x_W.svg";

// JJJJJJJJ vs AAAAAAAAA
import eightJ from "@/assets/svgs/8x_J.svg";
import nineA from "@/assets/svgs/9x_A.svg";

// VVVVV vs SSS
import fiveV from "@/assets/svgs/5x_V.svg";
import threeS from "@/assets/svgs/3x_S.svg";

// PPPPPPPP vs VVVVVVVVV
import eightP from "@/assets/svgs/8x_P.svg";
import nineV from "@/assets/svgs/9x_V.svg";

// TTTTTT vs CCCCCCC
import sixT from "@/assets/svgs/6x_T.svg";
import sevenC from "@/assets/svgs/7x_C.svg";

// BBB vs HHHHHHH
import threeB from "@/assets/svgs/3x_B.svg";
import sixH from "@/assets/svgs/6x_H.svg";

// FFFF vs XXXXXX
import fourF from "@/assets/svgs/4x_F.svg";
import sixX from "@/assets/svgs/6x_X.svg";

// LLLLL vs DDDD
import fiveL from "@/assets/svgs/5x_L.svg";
import fourD from "@/assets/svgs/4x_D.svg";

// RRRR vs NNNNNN
import fourR from "@/assets/svgs/4x_R.svg";
import sixN from "@/assets/svgs/6x_N.svg";

// GGGGGG vs KKKKKKKK
import sixG from "@/assets/svgs/6x_G.svg";
import eightK from "@/assets/svgs/8x_K.svg";

// HHHHHHH vs AAAA
import sevenH from "@/assets/svgs/7x_H.svg";
import fourA from "@/assets/svgs/4x_A.svg";

// JJJJJJ vs WWWWW
import sixJ from "@/assets/svgs/6x_J.svg";
import fiveW from "@/assets/svgs/5x_W.svg";


const letters: SvgImage[] = [
    { first: twoW, second: threeG, correct_img: 2 }, // WW vs GGG
    { first: sevenP, second: fiveS, correct_img: 1 }, // PPPPPPP vs SSSSS
    { first: fourH, second: threeD, correct_img: 1 }, // HHHH vs DDD
    { first: sevenK, second: eightE, correct_img: 2 }, // KKK vs EEEEEEEE

    { first: fiveH, second: threeW, correct_img: 1 }, // HHHHH vs WWW
    { first: eightJ, second: nineA, correct_img: 2 }, // JJJJJJJJ vs AAAAAAAAA
    { first: fiveV, second: threeS, correct_img: 1 }, // VVVVV vs SSS
    { first: eightP, second: nineV, correct_img: 2 }, // PPPPPPPP vs VVVVVVVVV

    { first: threeB, second: sixH, correct_img: 2 }, // BBB vs HHHHHH
    { first: fourF, second: sixX, correct_img: 2 }, // FFFF vs XXXXXX
    { first: fiveL, second: fourD, correct_img: 1 }, // LLLLL vs DDDD
    { first: sixT, second: sevenC, correct_img: 2 }, // TTTTTT vs CCCCCCC

    { first: fourR, second: sixN, correct_img: 2 }, // RRRR vs NNNNNN
    { first: sixG, second: eightK, correct_img: 2 }, // GGGGGG vs KKKKKKKK
    { first: sevenH, second: fourA, correct_img: 1 }, // HHHHHHH vs AAAA
    { first: sixJ, second: fiveW, correct_img: 1 } // JJJJJJ vs WWWWW
];

export default letters;
