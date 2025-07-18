import Hero from "@/components/Services/Services-Hero";
import Desc from "@/components/Services/Desc";

const heroData = {
    title: "Graphic Design",
    description:
        "We craft visually engaging designs that align with your brand, ensuring consistency across digital and print platforms.",
    image: "/services/hero/graphic-hero.jpg",
};


const designSolutionsData = {
    sections: [
        {
            layout: "left" as "left",
            cards: [
                {
                    title: "Social Media Creatives",
                    icon: "LuImage",
                    description:
                        "We design scroll-stopping posts, stories, and ad creatives that engage your audience while maintaining brand consistency. From Instagram carousels to LinkedIn banners, we ensure your social presence remains visually strong.",
                },
            ],
            cardsRight: [
                {
                    title: "Branding and Logo Design",
                    icon: "FaRegClock",
                    description:
                        "We create impactful logos and comprehensive brand identities that reflect your business’s values and vision. Our designs ensure your brand remains consistent across all platforms and leaves a memorable impression.",
                },
                {
                    title: "Marketing Collateral (Brochures, Posters)",
                    icon: "PiBrowser",
                    description:
                        "We design brochures, posters, and flyers that clearly communicate your message while capturing attention. Our designs blend aesthetics with strategy, ensuring your marketing materials are both beautiful and effective.",
                },
            ],
        },
        {
            layout: "right" as "right",
            cards: [
                {
                    title: "Infographics",
                    icon: "BsFileBarGraph",
                    description:
                        "We create visually clear and engaging infographics that transform complex information into easy-to-understand visuals. These are perfect for social sharing, presentations, and simplifying reports for your audience.",
                },
                {
                    title: "Packaging Design",
                    icon: "TbCube",
                    description:
                        "We design attractive and functional packaging that showcases your product while aligning with your brand’s identity. Our packaging designs focus on standing out on shelves and creating a memorable unboxing experience.",
                },
            ],
            cardsRight: [
                {
                    title: "Presentation Design",
                    icon: "RiComputerLine",
                    description:
                        "We design clean, engaging presentations for client pitches, webinars, and internal decks. Our designs ensure your message is clear, visually appealing, and aligned with your brand to captivate your audience.",
                },
            ],
        },
    ],
};

export default function Page() {

    return (
        <div>

            <Hero
                title={heroData.title}
                description={heroData.description}
                image={heroData.image}
            />

            <div className="mx-5 mt-20 md:mx-20">
                <h1 className="font-lato900 mb-6 text-3xl font-black md:text-5xl">
                    {" "}
                    We can help you with
                </h1>

                <Desc data={designSolutionsData} />

                <div className="font-lato900 mt-10 max-w-full rounded-xl bg-[#fbfbff] px-6 py-4 shadow-md">
                    <div className="flex flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-xs font-bold md:text-sm">
                            Ready to create your perfect software? We are!
                        </p>
                        <button className="bg-primary rounded-full px-6 py-1 text-xs text-white transition md:text-sm">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="font-lato900 my-20 w-full px-6 text-center md:px-20">
                    <h1 className="mb-6 text-3xl font-black md:text-5xl">
                        Join us on the journey?
                    </h1>

                    <p className="mx-auto max-w-full text-xs font-semibold md:text-sm">
                        We believe that every brand has a unique story to tell.
                        Let us help you share yours with the world. Partner with
                        devX Alpha, and together, we’ll create a digital
                        presence that leaves a lasting impression.
                    </p>
                </div>
            </div>
        </div>
    );
}
