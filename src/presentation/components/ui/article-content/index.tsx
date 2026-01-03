import { memo } from "react";

interface ArticleContentProps {
  content: string;
}

const ArticleContentRoot = ({ content }: ArticleContentProps) => {
  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
      data-aos="fade-up"
    />
  );
};

const ArticleContent = Object.assign(ArticleContentRoot, {});

export default memo(ArticleContent);
