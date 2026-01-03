import { memo, useMemo } from "react";
import { Link } from "react-router";
import { IStory } from "@/shared/types/global";
import ArticleContent from "@/presentation/components/ui/article-content";
import AuthorCard from "@/presentation/components/ui/author-card";
import ShareButton from "@/presentation/components/ui/share-button";
import StoryCard from "@/presentation/components/ui/story-card";

interface StoryDetailProps {
  story: IStory;
  relatedStories: IStory[];
}

const Header = () => {
  return (
    <div className="mb-6">
      <Link
        to="/stories"
        className="inline-flex items-center text-liburi-primary hover:text-liburi-primary/80 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Stories
      </Link>
    </div>
  );
};

const Hero = ({ story }: { story: IStory }) => {
  const formattedDate = useMemo(() => {
    return new Date(story.publishedAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, [story.publishedAt]);

  return (
    <div className="relative rounded-2xl overflow-hidden mb-8" data-aos="fade-down">
      <div className="aspect-[21/9] overflow-hidden">
        <img
          src={story.coverImage}
          alt={story.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex items-end p-8">
        <div className="text-white">
          <span className="inline-block px-3 py-1 bg-liburi-primary rounded-full text-xs font-medium mb-4">
            {story.category}
          </span>
          <h1 className="text-4xl font-bold mb-3">{story.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            {story.author.avatar && (
              <img
                src={story.author.avatar}
                alt={story.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span>{story.author.name}</span>
            <span className="text-white/60">•</span>
            <span className="text-white/80">{formattedDate}</span>
            <span className="text-white/60">•</span>
            <span className="text-white/80">{story.readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = ({ story }: { story: IStory }) => {
  return (
    <div className="max-w-3xl mx-auto" data-aos="fade-up">
      <ArticleContent content={story.content} />
    </div>
  );
};

const ShareButtons = ({ story }: { story: IStory }) => {
  const url = useMemo(() => typeof window !== "undefined" ? window.location.href : "", []);
  const platforms: Array<"facebook" | "twitter" | "linkedin" | "copy"> = ["facebook", "twitter", "linkedin", "copy"];

  return (
    <div className="flex items-center gap-3 my-8" data-aos="fade-up">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      {platforms.map((platform) => (
        <ShareButton
          key={platform}
          platform={platform}
          url={url}
          title={story.title}
        />
      ))}
    </div>
  );
};

const AuthorBio = ({ story }: { story: IStory }) => {
  return (
    <div className="my-12" data-aos="fade-up">
      <AuthorCard author={story.author} />
    </div>
  );
};

const RelatedStories = ({ stories }: { stories: IStory[] }) => {
  if (stories.length === 0) return null;

  return (
    <div className="my-12" data-aos="fade-up">
      <h3 className="text-2xl font-bold mb-6">Related Stories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Link key={story.id} to={`/stories/${story.slug}`}>
            <StoryCard story={story} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const StoryNavigation = ({ stories, currentId }: { stories: IStory[]; currentId: number }) => {
  const currentIndex = stories.findIndex((s) => s.id === currentId);
  const previous = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const next = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;

  if (!previous && !next) return null;

  return (
    <div className="flex justify-between items-center my-12 p-6 bg-gray-50 rounded-xl" data-aos="fade-up">
      {previous ? (
        <Link
          to={`/stories/${previous.slug}`}
          className="flex items-center gap-2 text-liburi-primary hover:text-liburi-primary/80 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <p className="text-xs text-gray-500">Previous</p>
            <p className="font-medium">{previous.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={`/stories/${next.slug}`}
          className="flex items-center gap-2 text-liburi-primary hover:text-liburi-primary/80 transition-colors"
        >
          <div className="text-right">
            <p className="text-xs text-gray-500">Next</p>
            <p className="font-medium">{next.title}</p>
          </div>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

const StoryDetailRoot = ({ story, relatedStories }: StoryDetailProps) => {
  const allStories = useMemo(() => [story, ...relatedStories], [story, relatedStories]);

  return (
    <div className="flex flex-col">
      <Header />
      <Hero story={story} />
      <ShareButtons story={story} />
      <Content story={story} />
      <AuthorBio story={story} />
      <RelatedStories stories={relatedStories} />
      <StoryNavigation stories={allStories} currentId={story.id} />
    </div>
  );
};

const StoryDetail = Object.assign(StoryDetailRoot, {
  Header,
  Hero,
  Content,
  ShareButtons,
  AuthorBio,
  RelatedStories,
  StoryNavigation,
});

export default memo(StoryDetail);
