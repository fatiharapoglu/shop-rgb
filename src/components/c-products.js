import ram1 from "../assets/parts/ram1.jpg";
import ram2 from "../assets/parts/ram2.jpg";
import ram3 from "../assets/parts/ram3.jpg";
import gpu1 from "../assets/parts/gpu1.jpg";
import gpu2 from "../assets/parts/gpu2.jpg";
import gpu3 from "../assets/parts/gpu3.jpg";
import gpu4 from "../assets/parts/gpu4.jpg";
import cpu1 from "../assets/parts/cpu1.jpg";
import cpu2 from "../assets/parts/cpu2.jpg";
import cpu3 from "../assets/parts/cpu3.jpg";
import cpu4 from "../assets/parts/cpu4.jpg";
import cpu5 from "../assets/parts/cpu5.jpg";
import cpu6 from "../assets/parts/cpu6.jpg";
import mobo1 from "../assets/parts/mobo1.jpg";
import mobo2 from "../assets/parts/mobo2.jpg";
import acc1 from "../assets/parts/acc1.jpg";
import acc2 from "../assets/parts/acc2.jpg";
import acc3 from "../assets/parts/acc3.jpg";
import acc4 from "../assets/parts/acc4.jpg";
import acc5 from "../assets/parts/acc5.jpg";
import acc6 from "../assets/parts/acc6.jpg";

const products = {
    rams: [
        {
            name: "Kingston 32GB DDR5",
            price: 4755.7,
            description: "Kingston 32GB (2x16GB) 6000MHz RGB DDR5 PC RAM",
            image: ram1,
            id: 1,
        },
        {
            name: "GSkill 64GB DDR5",
            price: 15941,
            description:
                "GSkill 64GB (2X32GB) Trident Z5 Rgb 6400MHz CL32 DDR5 1.4V Black Dual Kit",
            image: ram2,
            id: 2,
        },
        {
            name: "Corsair 32GB DDR5",
            price: 10647,
            description: "Corsair 32GB (2x16GB) DDR5 5600MHz C36 Platinum RGB Dominator Black LPX",
            image: ram3,
            id: 3,
        },
    ],

    gpus: [
        {
            name: "Gigabyte RTX 4090 24GB",
            price: 58949.15,
            description: "Gigabyte RTX 4090 GAMING OC 24GB GDDR6X 384Bit RGB Nvidia",
            image: gpu1,
            id: 4,
        },
        {
            name: "Galax RTX 4090 24GB",
            price: 49349,
            description: "Galax RTX 4090 SG 24GB 384Bit GDDR6X PCIE 4.0",
            image: gpu4,
            id: 5,
        },
        {
            name: "Asus RTX 4080 16GB",
            price: 46999,
            description:
                "Asus RTX 4080 ROG-STRIX-RTX4080-O16G-GAMING 16GB GDDR6X 256Bit OC 2xHDMI 3xDP RGB",
            image: gpu2,
            id: 6,
        },
        {
            name: "Asus RTX 4070TI 12GB",
            price: 25073.51,
            description:
                "Asus RTX 4070TI TUF-RTX4070TI-12G-GAMING 12GB GDDR6X 192Bit 2640MHz 2xHDMI 3xDP RGB",
            image: gpu3,
            id: 7,
        },
    ],

    cpus: [
        {
            name: "Intel i9 12900K",
            price: 12399,
            description: "Intel Core i9-12900K LGA1700 3.2Ghz Box",
            image: cpu1,
            id: 8,
        },
        {
            name: "Intel i7 12700K",
            price: 8799,
            description: "Intel Core i7-12700K 2.7GHz 12 Core 25MB Cache LGA1700",
            image: cpu2,
            id: 9,
        },
        {
            name: "Intel i5 12600K",
            price: 6950,
            description: "Intel Core i5-12600K 2.8GHz 10 Core 20MB Cache LGA1700",
            image: cpu3,
            id: 10,
        },
        {
            name: "AMD Ryzen 9 7950X",
            price: 14749,
            description: "AMD Ryzen 9 7950X 4.5GHz 16 Core 80MB Cache AM5",
            image: cpu4,
            id: 11,
        },
        {
            name: "AMD Ryzen 9 7900X",
            price: 10498.99,
            description: "AMD Ryzen 9 7900X 4.7GHz 12 Core 76MB Cache AM5",
            image: cpu4,
            id: 12,
        },
        {
            name: "AMD Ryzen 7 7700X",
            price: 7799,
            description: "AMD Ryzen 7 7700X 4.5GHz 8 Core 40MB Cache AM5",
            image: cpu5,
            id: 13,
        },
        {
            name: "AMD Ryzen 5 7600X",
            price: 5399,
            description: "AMD Ryzen 5 7600X 4.7GHz 6 Core 38MB Cache AM5",
            image: cpu6,
            id: 14,
        },
    ],

    mobos: [
        {
            name: "ASUS TUF GAMING Z690+",
            price: 6833.2,
            description:
                "ASUS TUF GAMING Z690-PLUS WIFI Intel Z690 LGA1700 DDR5 6000 MHz DP HDMI 4x M2 USB3.2 RGB ATX PCIe 5.0",
            image: mobo1,
            id: 15,
        },
        {
            name: "MSI Meg X670E",
            price: 23488,
            description: "MSI Meg X670E Ace AM5 DDR5 4x M.2 USB 3.2 10G LAN AMD WIFI 6e RGB EATX",
            image: mobo2,
            id: 16,
        },
    ],

    accessories: [
        {
            name: "Razer Cynosa Keyboard",
            price: 1047,
            description: "Razer RZ03-03401300-R3L1 Cynosa V2 Chroma Membran TR Keyboard",
            image: acc1,
            id: 17,
        },
        {
            name: "Corsair Gaming Glaive Mouse",
            price: 12283,
            description: "Corsair Gaming Glaive RGB 16000DPI",
            image: acc2,
            id: 18,
        },
        {
            name: "ASUS ROG Strix Scope Keyboard",
            price: 5808,
            description:
                "ASUS ROG Strix Scope RX Red Switch 1ms IP57 Waterproof RGB TR Optical Wired Mechanical Gaming Keyboard",
            image: acc3,
            id: 19,
        },
        {
            name: "Corsair Virtuoso Headphones",
            price: 5629,
            description: "Corsair Virtuoso RGB Wireless Gaming Headphones",
            image: acc4,
            id: 20,
        },
        {
            name: "Corsair H100i Liquid Cooler",
            price: 13647,
            description: "Corsair H100i RGB Platinum 240mm White Liquid Cooler",
            image: acc5,
            id: 21,
        },
        {
            name: "Thermaltake Riing Trio Cooler",
            price: 2795.36,
            description: "Thermaltake Riing Trio 14 RGB 3x140mm Fan",
            image: acc6,
            id: 22,
        },
    ],
};

export default products;
