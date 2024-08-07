import { Playfair_Display } from "next/font/google";
import { CONTACTS } from "@/constants";
import Link from "next/link";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20  mt-20 mb-[136px] items-center justify-center"
      >
        <h1
          className={`text-[30px] md:text-[54px]  ${playfair.className} italic font-semibold mt-4 app_blk_accent mb-14`}
        >
          Let's Connect!
        </h1>
        <div
          id="link_body"
          className="flex flex-col md:flex-row justify-between max-w-[1200px] w-full"
        >
          {CONTACTS.map((link) => (
            <div className="flex flex-col items-center mb-14">
              <p
                className={
                  link.label === "👋" || link.label === "📍" ? "" : "italic"
                }
              >
                {link.label}
              </p>
              <Link
                href={link.href}
                key={link.key}
                target="_blank"
                rel="noopener noreferrer"
                className="font-xl app_gray underline underline-offset-2 mt-[6px]"
              >
                {link.key}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
