import { memo, useState } from "react";

interface ShareButtonProps {
  url: string;
  title: string;
  platform: "facebook" | "twitter" | "linkedin" | "copy";
}

const PLATFORMS = {
  facebook: {
    name: "Facebook",
    icon: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    color: "bg-blue-600 hover:bg-blue-700",
  },
  twitter: {
    name: "Twitter",
    icon: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
    color: "bg-sky-500 hover:bg-sky-600",
  },
  linkedin: {
    name: "LinkedIn",
    icon: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    ),
    color: "bg-blue-700 hover:bg-blue-800",
  },
  copy: {
    name: "Copy Link",
    icon: (
      <>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </>
    ),
    color: "bg-gray-600 hover:bg-gray-700",
  },
};

const ShareButtonRoot = ({ url, title, platform }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      };
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const config = PLATFORMS[platform];

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full text-white ${config.color} transition-colors`}
      title={config.name}
    >
      {copied ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          {config.icon}
        </svg>
      )}
    </button>
  );
};

const ShareButton = Object.assign(ShareButtonRoot, {});

export default memo(ShareButton);
