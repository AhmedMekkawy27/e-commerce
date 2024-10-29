import { CiMobile3 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import { PiDress } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { BsShieldCheck } from "react-icons/bs";
export const breakpoints = {
  base: "30em", // 0px
  sm: "36em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};
export const categoryData = [
  {
    icon: CiMobile3,
    text: "Mobiles",
  },
  {
    icon: HiOutlineDesktopComputer,
    text: "Computers",
  },
  {
    icon: IoDiamondOutline,
    text: "Jewelery",
  },
  {
    icon: PiDress,
    text: "Women's Clothing",
  },
  {
    icon: IoShirtOutline,
    text: "Men's Clothing",
  },
];

export const sales = [
  {
    icon: CiShop,
    text: "10.5k",
    text2: "Sellers active in our site",
    boxsize: "50px",
  },
  {
    icon: LuCircleDollarSign,
    text: "33k",
    text2: "Monthly Product Sale",
    boxsize: "50px",
  },
  {
    icon: FaShoppingBag,
    text: "45.5k",
    text2: "Customer active in our site",
    boxsize: "40px",
  },
  {
    icon: FaSackDollar,
    text: "25k",
    text2: "Sallers active in our site",
    boxsize: "40px",
  },
];

export const aboutCards = [
  {
    image: "../../public/card1.png",
    title: "Tom Cruise",
    job: "Founder & Chairman",
  },
  {
    image: "../../public/card2.png",
    title: "Emma Watson",
    job: "Managing Director",
  },
  {
    image: "../../public/card3.png",
    title: "Will Smith",
    job: "Product Designer",
  },
];

export const aboutFeatures = [
  {
    icon: CiDeliveryTruck,
    text: "FREE AND FAST DELIVERY",
    text2: "Free delivery for all orders over $140",
  },
  {
    icon: CiHeadphones,
    text: "24/7 CUSTOMER SERVICE",
    text2: "Friendly 24/7 customer support",
  },
  {
    icon: BsShieldCheck,
    text: "MONEY BACK GUARANTEE",
    text2: "We reurn money within 30 days",
  },
];
