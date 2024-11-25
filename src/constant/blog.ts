import { MasterOfWorkImg, SuperHumanImg, SuperPowerDailyImg } from "@/assets";
import { BlogType } from "@/types";

const blogList: BlogType[] = [
  {
    title: "How Masters of Work runs their productivity newsletter ads business on Passionfroot",
    readTime: "5 MIN READ",
    image: MasterOfWorkImg,
    description: "Masters of Work is an AI and productivity newsletter focused on sharing tools and tricks to help people automate...",
  },
  {
    title: "How Superpower Daily makes 5 figures with Passionfroot",
    readTime: "4 MIN READ",
    image: SuperPowerDailyImg,
    description: "Superpower Daily is a ChatGPT extension and daily newsletter, offering the latest in AI news, tools, and...",
  },
  {
    title: "How Superhuman built the largest newsletter ads business in AI with Passionfroot",
    readTime: "4 MIN READ",
    image: SuperHumanImg,
    description: "Superhuman is one of the biggest and fastest-growing AI newsletters globally, helping over 450,000 readers from...",
  },
];

export default blogList;
