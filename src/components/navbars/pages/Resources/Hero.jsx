import Button from "./Ui/Button";
import heroImage from "../../assets/CareerHeroImg.png";
import HeroImage from "./HeroImage";
const Hero = () => {
    const herocontent = {
        img: heroImage,
        title: "The future of lithium production is here.",
    };
    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            {/* Hero Image Component */}
            <HeroImage imageUrl={herocontent.img} />

            {/* Hero Content Component */}
        </section>
    );
};

export default Hero;
