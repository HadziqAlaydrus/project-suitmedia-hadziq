import React from 'react';
import logo from '../assets/site-logo.webp';

const Banner = () => {
  return (
    <div className="relative overflow-hidden h-80 z-10 mt-6">
      {/* Image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://suitmedia.static-assets.id/strapi/idea_adec528fc9.png)',
          backgroundAttachment: 'fixed', // Parallax effect
        }}
      />
      
      {/* Overlay with slanted edge */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-20" />

      {/* Content with parallax effect */}
      <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
        <div className="relative">
          <h1 className="text-4xl font-bold mb-4">Ideas</h1>
          <p className="text-lg">Where all our great things begin</p>
        </div>
      </div>

      {/* Slanted bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform rotate-3 -skew-y-6 z-20" />
    </div>
  );
};

export default Banner;
