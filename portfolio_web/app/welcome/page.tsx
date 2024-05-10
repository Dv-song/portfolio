import Image from "next/image";
import Hero from "@/components/Hero";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Welcome() {
  return <p>hello this is welcoming page</p>;
}
