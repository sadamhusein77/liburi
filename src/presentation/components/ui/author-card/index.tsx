import { memo } from "react";
import { IStoryAuthor } from "@/shared/types/global";

interface AuthorCardProps {
  author: IStoryAuthor;
}

const AuthorCardRoot = ({ author }: AuthorCardProps) => {
  return (
    <div
      className="flex items-start gap-4 bg-gray-50 rounded-xl p-6"
      data-aos="fade-up"
    >
      {author.avatar && (
        <img
          src={author.avatar}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
      )}
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{author.name}</h4>
        {author.bio && <p className="text-sm text-gray-600">{author.bio}</p>}
      </div>
    </div>
  );
};

const AuthorCard = Object.assign(AuthorCardRoot, {});

export default memo(AuthorCard);
