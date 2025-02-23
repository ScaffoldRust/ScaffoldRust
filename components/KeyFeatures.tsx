import { Inter } from "next/font/google";
import Image from "next/image";
import fast from "@/public/fast.svg";
import lock from "@/public/lock.svg";
import web from "@/public/web.svg";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const keyFeatures = [
  {
    id: 1,
    icon: fast,
    title: "Rapid Development",
    content:
      "Pre-configured and optimized templates to start developing blockchain applications in minutes.",
    gradientClass: "bg-gradient-to-b from-red-500/10 to-transparent",
  },
  {
    id: 2,
    icon: lock,
    title: "Integrated Security",
    content:
      "Implement best security practices from day one with built-in safeguards and audited code patterns.",
    gradientClass: "bg-gradient-to-b from-[#3B82F61A] to-transparent",
  },
  {
    id: 3,
    icon: web,
    title: "Multi-Chain Support",
    content:
      "Develop for multiple blockchains using Rust as the base language, including Stellar, Solana, and more.",
    gradientClass: "bg-gradient-to-b from-[#22C55E1A] to-transparent",
  },
];

const KeyFeatures = () => {
  return (
    <section className={`px-8 ${inter.className}`}>
      <div className="flex flex-col gap-12">
        <h3 className={"font-bold text-3xl text-center"}>Key Features</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {keyFeatures.map((item) => (
            <div key={item.id} className="relative group h-full">
              <div
                className={`absolute inset-0 ${item.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl h-full`}
              />
              <div className="border border-[#FFFFFF0D] bg-[#FFFFFF0D] rounded-2xl p-6 h-full">
                <div className="flex flex-col gap-4">
                  <Image
                    src={item.icon}
                    width={48}
                    height={48}
                    alt={`${item.title} icon`}
                    className="w-12 h-12"
                  />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-[#FFFFFF99]">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
