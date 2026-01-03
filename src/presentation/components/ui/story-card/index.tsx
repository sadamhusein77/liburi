import { memo } from "react";
import { IStory } from "@/shared/types/global";

interface StoryCardProps {
  story: IStory;
  onClick?: () => void;
  variant?: "default" | "featured";
}

const StoryCardRoot = ({ story, onClick, variant = "default" }: StoryCardProps) => {
  if (variant === "featured") {
    return (
      <div
        onClick={onClick}
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
        data-aos="fade-up"
      >
        {/* Cover Image */}
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-liburi-primary rounded-full text-xs font-medium mb-4">
            {story.category}
          </span>

          {/* Title */}
          <h2 className="text-3xl font-bold mb-3 line-clamp-2">
            {story.title}
          </h2>

          {/* Excerpt */}
          <p className="text-white/80 mb-4 line-clamp-2">
            {story.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {story.author.avatar && (
                <img
                  src={story.author.avatar}
                  alt={story.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="text-sm font-medium">{story.author.name}</span>
            </div>
            <span className="text-white/60">•</span>
            <span className="text-sm text-white/60">
              {new Date(story.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <span className="text-white/60">•</span>
            <span className="text-sm text-white/60">{story.readTime} min read</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
      data-aos="fade-up"
    >
      {/* Cover Image */}
      <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-liburi-primary/20 to-liburi-primary/5">
        <img
          src={story.coverImage}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Read Time */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-liburi-primary/10 text-liburi-primary rounded-lg text-xs font-medium">
            {story.category}
          </span>
          <span className="text-xs text-gray-500">{story.readTime} min read</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-liburi-primary transition-colors">
          {story.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {story.excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            {story.author.avatar && (
              <img
                src={story.author.avatar}
                alt={story.author.name}
                className="w-6 h-6 rounded-full object-cover"
              />
            )}
            <span className="text-xs text-gray-600">{story.author.name}</span>
          </div>
          <span className="text-xs text-gray-500">
            {new Date(story.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric"
            })}
          </span>
        </div>
      </div>
    </article>
  );
};

const StoryCard = Object.assign(StoryCardRoot, {});

export default memo(StoryCard);
