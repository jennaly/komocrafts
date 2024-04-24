import React from "react";
import { gilda, monstserrat } from "../ui/fonts";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-24 flex flex-col justify-center">
        <h1
          className={`${gilda.className} text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-snug md:leading-normal lg:leading-normal text-center w-11/12 md:w-5/6 lg:w-4/5 mx-auto`}
        >
          Artisanal creations designed to enhance the everyday
        </h1>
        <section className="flex flex-col md:flex-row my-10">
          <div
            className={`${monstserrat.className} md:w-1/2 flex flex-col justify-center p-5 md:p-8 lg:p-10`}
          >
            <p className="uppercase text-sm mt-4">Why we started komocrafts</p>
            <h2
              className={`${gilda.className} text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl my-4 md:leading-tight lg:leading-normal`}
            >
              To share our love of craftsmanship
            </h2>
            <p>
              We are passionate about creating unique handcrafted home decor
              products and accessories that exude warmth and personality. Our
              desire to share these timeless skills with others led us to offer
              workshops, empowering individuals to explore their creativity and
              craft their own stunning pieces. With every intricately crafted
              item and every workshop taught, we aim to foster a community of
              creativity, connection, and appreciation for handmade artistry in
              every home.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 gap-6 p-5 md:p-0 my-auto">
            <div className="flex flex-col gap-4 w-1/2 justify-end">
              <Image
                src="/our-story-collage-1.jpeg"
                width={1200}
                height={1600}
                alt="Heart embroidery project"
                className="h-52 lg:h-80 object-cover"
              />
              <Image
                src="/our-story-collage-3.jpeg"
                width={1200}
                height={1600}
                alt="Yarn baskets"
                className="h-48 lg:h-60 object-contain object-right"
              />
            </div>

            <Image
              src="/our-story-collage-2.jpeg"
              width={1200}
              height={1600}
              alt="Macrame coasters project"
              className="h-48 lg:h-80 w-1/2 object-cover  my-auto"
            />
          </div>
        </section>
      </div>

      <section className="lg:p-20 p-4 bg-komo-latte">
        <div className="flex flex-nowrap gap-4 lg:gap-20 w-11/12 lg:w-4/5 mx-auto">
          <div className="w-1/3">
            <Image
              src="/handsknitting-illustration.png"
              width={1050}
              height={1046}
              alt="Illustration of hands knitting"
              className="lg:h-auto lg:w-full"
            />
            <div className="text-center flex flex-col gap-2 mt-2">
              <h3 className={`${gilda.className} text-xl lg:text-2xl`}>
                Handmade and unique
              </h3>
              <p className={`${monstserrat.className}`}>
                Artisanal creations crafted with care and touches of
                individuality
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <Image
              src="/cotton-illustration.png"
              width={1044}
              height={1046}
              alt="Illustration of the cotton plant"
              className="lg:h-auto lg:w-full"
            />
            <div className="text-center flex flex-col gap-2 mt-2">
              <h3 className={`${gilda.className} text-xl lg:text-2xl`}>
                Sustainable materials
              </h3>
              <p className={`${monstserrat.className}`}>
                Eco-friendly materials, responsibly sourced for minimal
                environmental impact
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <Image
              src="/macrame-illustration.png"
              width={1050}
              height={1046}
              alt="Illustration of a macrame wall hanging product"
              className="lg:h-auto lg:w-full"
            />
            <div className="text-center flex flex-col gap-2 mt-2">
              <h3 className={`${gilda.className} text-xl lg:text-2xl`}>
                High-quality and durable
              </h3>
              <p className={`${monstserrat.className}`}>
                Beautiful and built to last using premium materials and
                specialized techniques
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
