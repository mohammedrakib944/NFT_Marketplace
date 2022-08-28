import amazon from "../assets/svg/amazon.svg";
import verizon from "../assets/svg/verizon.svg";
import microsoft from "../assets/svg/microsoft.svg";
import netflix from "../assets/svg/netflix.svg";
import sony from "../assets/svg/sony.svg";

import { BsEmojiSmile, BsBarChartFill, BsSunFill } from "react-icons/bs";
import { AiOutlineMobile, AiFillLock } from "react-icons/ai";
import { GoSettings } from "react-icons/go";

import man from "../assets/img/man.jpg";
import man2 from "../assets/img/man2.jpg";
import man3 from "../assets/img/man3.jpg";

export const CardData = [
  {
    id: 1,
    img: man,
    desc: "Share a real testimonial that hits some of your benefits from one of your popular customer.",
    name: "Sarah Steiner",
    title: "VP Sales at Google",
  },
  {
    id: 2,
    img: man2,
    desc: "Make sure you only pick the right sentence to keep it short and simple.",
    name: "Dylan Ambrose",
    title: "Lead marketer at Netflix",
  },
  {
    id: 3,
    img: man3,
    desc: "This is an awesome landing page template I've seen. I would use this for anything.",
    name: "Gabrielle Winn",
    title: "Co-founder of Acme Inc",
  },
];

export const PartnersData = [
  {
    id: 1,
    img: amazon,
  },
  {
    id: 2,
    img: verizon,
  },
  {
    id: 3,
    img: microsoft,
  },
  {
    id: 4,
    img: netflix,
  },
  {
    id: 5,
    img: sony,
  },
];

export const FData = [
  {
    id: 1,
    icon: <BsEmojiSmile />,
    title: "ETH Compatibility",
    disc: "ndustry dominance, established tech stack, tools, languages, standards, enterprise adoption",
  },
  {
    id: 2,
    icon: <BsBarChartFill />,
    title: "Scalability",
    disc: "Dedicated blockchains, scalable consensus algorithms, custom Wasm execution environments",
  },
  {
    id: 3,
    icon: <AiFillLock />,
    title: "Security",
    disc: "Modular ''security as a service'', provided either by Ethereum or by a pool of professional validators",
  },
];

export const FData2 = [
  {
    id: 1,
    icon: <AiOutlineMobile />,
    title: "Mobile Responsive Template",
    disc: "CoolBlocks is committed to fostering the growth of Web3 applications by providing the infrastructure needed for Web3.",
  },
  {
    id: 2,
    icon: <GoSettings />,
    title: "Launch customized blockchains, private & public",
    disc: "Over 100+ dApps have used CoolBlocks to scale their performance",
  },
  {
    id: 3,
    icon: <BsSunFill />,
    title: "Scale to 1000s of validators with minimal hardware",
    disc: "Stake, or lock up, your CBT to help process transactions and further secure the platform–providing security guarantees well-above the 51% standard. You probably have the hardware required to join the platform.",
  },
];

export const FAQ = [
  {
    id: 1,
    question: "Carbon footprint?",
    ans: "Yes, Offset carbon footprints for Polygon, and buy extra credits to become carbon negative.",
  },
  {
    id: 2,
    question: "Donations",
    ans: "Make donations easy for NGOs that fight climate change.",
  },
  {
    id: 3,
    question: "Resources?",
    ans: "Provide resources for ecosystem partners who want to offset their carbon footprint.",
  },
  {
    id: 4,
    question: "Do you offer technical support?",
    ans: "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];
