"use client";

type Props = {title: string; issuer: string;  date: string;  skills: string[];  file: string;  img: string;
}

export default function CertificationFlipCard({
  title,
  issuer,
  date,
  skills,
  file,
  img,
}: Props) {
  return (
    <div className="w-[320px] h-[420px] perspective">
     <div className="relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">

        {/* FRONT SIDE (Certificate Image Only) */}
        <div className="absolute inset-0 bg-[#0b1220] border border-gray-700 rounded-2xl overflow-hidden backface-hidden transform">

          {/* Certificate Image */}
          <img
            src={img}
            alt={title}
            className="w-full h-52 object-cover"
          />

          {/* Title */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
            <p className="text-gray-400 mt-4">{issuer}</p>

            <p className="text-blue-300 mt-2">{date}</p>

            <p className="text-sm text-gray-500 mt-6">
              Hover to view details →
            </p>
          </div>
        </div>

        {/* BACK SIDE (No Image Needed) */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-900 to-black border border-blue-500 rounded-2xl p-8 rotate-y-180 backface-hidden transform">

          {/* Title */}
          <h3 className="text-2xl font-bold text-white">{title}</h3>

          {/* Issuer */}
          <p className="mt-6 text-gray-300">
            <span className="font-semibold">Issued by:</span> {issuer}
          </p>

          {/* Date */}
          <p className="mt-4 text-gray-300">
            <span className="font-semibold">Date:</span> {date}
          </p>

          {/* Skills */}
          <div className="mt-6">
            <p className="font-semibold text-gray-200 mb-2">Skills:</p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-indigo-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 block w-full text-center py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
}
