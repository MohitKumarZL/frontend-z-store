import React from "react";
import heroImage from "../assets/Sustainbility/sustainHero.jpg"; // Replace with your image path

const Sustainability = () => {

 

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-black overflow-hidden">
        <img
          src={heroImage}
          alt="Sustainability Hero"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold text-center px-4">
            Elegance In Simplicity, Earth’s Harmony
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Sustainability At Modimal</h2>
        <p className="text-gray-600 mb-10">
          At Modimal, sustainability is at the heart of everything we do. Our brand identity, characterized by its simplicity and elegance, is a reflection of our commitment to a more sustainable future.
        </p>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Minimalism</h3>
            <p className="text-sm text-gray-600">
              We believe less is more. Our thoughtfully designed basics remove unnecessary noise, helping our customers become a version of themselves they feel confident in. We introduce & encourage quality over quantity through timeless design.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Circular</h3>
            <p className="text-sm text-gray-600">
              Embracing the circular economy, we design with longevity and recyclability in mind. We are invested in ensuring that our pieces remain useful far beyond trends, minimizing our impact on landfills.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Ethical</h3>
            <p className="text-sm text-gray-600">
              Every stitch tells a story. Our garments are responsibly crafted by skilled artisans. We ensure fair wages, safe working conditions, and a mutual respect for all individuals who bring our vision to life.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Transparency</h3>
            <p className="text-sm text-gray-600">
              We operate with honesty and transparency while owning our impact. From sourcing to pricing, we aim to empower customers with knowledge about our practices and progress. We share the journey, not just the destination.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Eco-Friendly Materials</h3>
            <p className="text-sm text-gray-600">
              Our fabrics are carefully chosen for their environmental impact — organic cotton, recycled fibers, and low-impact dyes. Every decision we make, from packaging to labeling, is intentional and sustainable.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Community And Empowerment</h3>
            <p className="text-sm text-gray-600">
              Our brand is a voice and platform that speaks a language of empowerment. From amplifying unheard voices to supporting local communities, our impact stretches beyond fashion.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-12 text-sm text-gray-700">
          <p>
            Our vision is to create a future where fashion is sustainable by design. Through our design philosophy, by promoting circular values and committing to eco-ethics, Modimal is on a journey to becoming a brand championing eco-friendly elegance and empowering by choice. A new harmony and beyond—brought to fashion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
