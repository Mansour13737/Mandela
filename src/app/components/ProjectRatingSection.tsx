"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Artist {
  id: number;
  name: string;
  avatar?: string;
}

interface ProjectRatingSectionProps {
  projectName: string;
  artists: Artist[];
}

export default function ProjectRatingSection({ projectName, artists }: ProjectRatingSectionProps) {
  const [ratings, setRatings] = useState<Record<number, number>>({}); // key: artistId, value: 1-5

  const handleRate = (artistId: number, value: number) => {
    setRatings(prev => ({ ...prev, [artistId]: value }));
  };

  const averageRating =
    Object.values(ratings).length > 0
      ? Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length
      : 0;

  return (
    <section className="py-12 px-6 bg-gray-950 text-white max-w-4xl mx-auto rounded-3xl">
      <h2 className="text-2xl font-[var(--font-play)] font-bold mb-6 text-center">{projectName}</h2>

      <div className="flex flex-col gap-6">
        {artists.map(artist => (
          <div key={artist.id} className="flex items-center justify-between bg-white/5 backdrop-blur-md p-4 rounded-xl">
            <div className="flex items-center gap-4">
              {artist.avatar && (
    <Image
      src={artist.avatar}
      alt={artist.name}
      fill
      className="object-cover"
    />              )}
              <span className="font-semibold">{artist.name}</span>
            </div>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star
                  key={star}
                  size={20}
                  className={`cursor-pointer transition ${
                    ratings[artist.id] >= star ? "text-yellow-400" : "text-white/40"
                  }`}
                  onClick={() => handleRate(artist.id, star)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <span className="text-gray-300 font-semibold">
          امتیاز میانگین: {averageRating.toFixed(1)} / 5
        </span>
      </div>
    </section>
  );
}