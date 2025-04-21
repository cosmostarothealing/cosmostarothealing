import Image from "next/image"
import Tarot from "../../../public/tarot.png"
import Reiki from "../../../public/reiki.png"
import Crystals from "../../../public/crystal1.png"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:h-[90vh] border border-[#ca9d75] mt-0.5">

                <div className="flex flex-col lg:w-1/3 justify-around items-center py-4 group">
                    <div className="transition-transform duration-300 group-hover:scale-105">
                        <Image src={Tarot} className="w-72" alt="tarot picture" />
                    </div>
                    <div className="flex flex-col items-center text-center px-10 py-2">
                        <h1 className="text-3xl lg:text-4xl tracking-wider font-extralight text-[#926d41] mb-4">TAROT</h1>
                        <p>Uncover hidden truths and find clarity through ancient Tarot wisdom tailored to your journey.</p>

                        <Link href="/tarot-reading" className="mt-4 relative inline-flex items-center group-hover:text-[#926d41] transition-colors">
                            <span className="mr-1 transform transition-transform duration-300 group-hover:rotate-90 text-[#ca9d75]">✦</span>
                            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-[1px] after:bg-[#ca9d75] after:transition-all after:duration-300">Learn more</span>
                        </Link>
                    </div>
                </div>
                {/* REIKI */}
                <div className="bg-[#fdf8f3] flex flex-col justify-around items-center lg:w-1/3 border-y lg:border-y-0 border-x-0 lg:border-x border-[#ca9d75] group">
                    <div className="transition-transform duration-300 group-hover:scale-105">
                        <Image src={Reiki} className="w-72" alt="Reiki picture" />
                    </div>
                    <div className="flex flex-col items-center text-center px-10 py-2">
                        <h1 className="text-3xl lg:text-4xl tracking-wider font-extralight text-[#926d41] mb-4">REIKI</h1>
                        <p>Experience spiritual healing through ancient Reiki practices that balance your energy and calm the soul.</p>

                        <Link href="/reiki-healing" className="mt-4 relative inline-flex items-center group-hover:text-[#926d41] transition-colors">
                            <span className="mr-1 transform transition-transform duration-300 group-hover:rotate-90 text-[#ca9d75]">✦</span>
                            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-[1px] after:bg-[#ca9d75] after:transition-all after:duration-300">Learn more</span>
                        </Link>
                    </div>
                </div>

                {/* CRYSTALS */}
                <div className="flex flex-col lg:w-1/3 justify-around items-center group">
                    <div className="transition-transform duration-300 group-hover:scale-105">
                        <div className="w-72 p-3 border border-dashed border-[#ca9d75] rounded-t-full overflow-hidden">
                            <Image
                                src={Crystals}
                                alt="Crystals picture"
                                className="w-full rounded-t-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center px-10 py-2">
                        <h1 className="text-3xl lg:text-4xl tracking-wider font-extralight text-[#926d41] mb-4">CRYSTALS</h1>
                        <p>Align your energy with handpicked crystals chosen for protection, manifestation, and inner growth.</p>

                        <Link href="/shop" className="mt-4 relative inline-flex items-center group-hover:text-[#926d41] transition-colors">
                            <span className="mr-1 transform transition-transform duration-300 group-hover:rotate-90 text-[#ca9d75]">✦</span>
                            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-[1px] after:bg-[#ca9d75] after:transition-all after:duration-300">Learn more</span>
                        </Link>
                    </div>
                </div>


            </div>


        </>
    )
};