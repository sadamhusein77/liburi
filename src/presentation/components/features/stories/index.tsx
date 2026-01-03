import { memo, useCallback } from "react";
import { useNavigate } from "react-router";
import { IStory } from "@/shared/types/global";
import StoryCard from "@/presentation/components/ui/story-card";
import SectionHeader from "@/presentation/components/ui/section-header";

interface StoriesProps {
  featured?: IStory;
  stories: IStory[];
}

const StoriesRoot = ({ featured, stories }: StoriesProps) => {
  const navigate = useNavigate();

  const handleStoryClick = useCallback((slug: string) => {
    navigate(`/stories/${slug}`);
  }, [navigate]);

  if (!featured && stories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-12">
      {/* Featured Story */}
      {featured && (
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Story</h2>
          </div>
          <StoryCard
            story={featured}
            variant="featured"
            onClick={() => handleStoryClick(featured.slug)}
          />
        </section>
      )}

      {/* All Stories */}
      {stories.length > 0 && (
        <section>
          <SectionHeader
            title="Latest Stories"
            subtitle="Discover travel inspiration from around the world"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onClick={() => handleStoryClick(story.slug)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const Stories = Object.assign(StoriesRoot, {});

export default memo(Stories);
