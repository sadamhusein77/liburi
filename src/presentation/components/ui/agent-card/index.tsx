import { memo } from "react";
import { IAgent } from "@/shared/types/global";

interface AgentCardProps {
  agent: IAgent;
  onContact?: () => void;
}

const AgentCardRoot = ({ agent, onContact }: AgentCardProps) => {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
      data-aos="fade-up"
    >
      {/* Avatar Section */}
      <div className="relative pt-8 pb-6 px-6 bg-gradient-to-br from-liburi-primary/10 to-transparent">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            {agent.verified && (
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Name & Title */}
        <h3 className="text-lg font-bold text-center text-gray-900 mb-1">
          {agent.name}
        </h3>
        <p className="text-sm text-center text-liburi-primary mb-3">
          {agent.title}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(agent.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {agent.rating}
          </span>
          <span className="text-xs text-gray-500">
            ({agent.reviewCount} reviews)
          </span>
        </div>

        {/* Experience */}
        <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>{agent.experience} years experience</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6 pt-4">
        {/* Specialties */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Specialties
          </p>
          <div className="flex flex-wrap gap-2">
            {agent.specialties.slice(0, 3).map((specialty) => (
              <span
                key={specialty}
                className="px-2 py-1 bg-liburi-primary/10 text-liburi-primary rounded-lg text-xs font-medium"
              >
                {specialty}
              </span>
            ))}
            {agent.specialties.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                +{agent.specialties.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Languages
          </p>
          <div className="flex flex-wrap gap-2">
            {agent.languages.map((language) => (
              <span
                key={language}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <button
          onClick={onContact}
          className="w-full py-2.5 bg-liburi-primary hover:bg-liburi-primary/90 text-white font-medium rounded-xl transition-colors duration-200"
        >
          Contact Agent
        </button>
      </div>
    </div>
  );
};

const AgentCard = Object.assign(AgentCardRoot, {});

export default memo(AgentCard);
