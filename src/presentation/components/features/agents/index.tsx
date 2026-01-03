import { memo, useMemo, useState, useCallback } from "react";
import { IAgent } from "@/shared/types/global";
import AgentCard from "@/presentation/components/ui/agent-card";
import SearchInput from "@/presentation/components/ui/search-input";
import FilterChip from "@/presentation/components/ui/filter-chip";
import SectionHeader from "@/presentation/components/ui/section-header";

interface AgentsProps {
  agents: IAgent[];
  specialties?: string[];
}

const SearchAndFilter = ({
  onSearch,
  specialties,
  selectedSpecialty,
  onSpecialtyChange,
}: {
  onSearch: (value: string) => void;
  specialties?: string[];
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
}) => {
  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchInput
          placeholder="Search agents by name or specialty..."
          onSearch={onSearch}
        />
      </div>

      {/* Specialty Filters */}
      {specialties && specialties.length > 0 && (
        <div className="flex flex-wrap gap-3">
          <FilterChip
            label="All Specialties"
            active={selectedSpecialty === ""}
            onClick={() => onSpecialtyChange("")}
          />
          {specialties.map((specialty) => (
            <FilterChip
              key={specialty}
              label={specialty}
              active={selectedSpecialty === specialty}
              onClick={() => onSpecialtyChange(specialty)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const AgentsGrid = ({ agents, onContact }: { agents: IAgent[]; onContact: (agent: IAgent) => void }) => {
  if (agents.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No agents found matching your criteria.</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search term.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          onContact={() => onContact(agent)}
        />
      ))}
    </div>
  );
};

const AgentsRoot = ({ agents, specialties }: AgentsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query.toLowerCase());
  }, []);

  const handleSpecialtyChange = useCallback((specialty: string) => {
    setSelectedSpecialty(specialty);
  }, []);

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const matchesSearch =
        searchQuery === "" ||
        agent.name.toLowerCase().includes(searchQuery) ||
        agent.title.toLowerCase().includes(searchQuery) ||
        agent.specialties.some((s) => s.toLowerCase().includes(searchQuery));

      const matchesSpecialty =
        selectedSpecialty === "" ||
        agent.specialties.includes(selectedSpecialty);

      return matchesSearch && matchesSpecialty;
    });
  }, [agents, searchQuery, selectedSpecialty]);

  const handleContact = useCallback((agent: IAgent) => {
    // TODO: Implement contact modal or navigation
    console.log("Contact agent:", agent.name);
  }, []);

  const agentCount = useMemo(() => filteredAgents.length, [filteredAgents.length]);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <SectionHeader
        title="Meet Our Travel Agents"
        subtitle={`${agentCount} expert agents ready to help plan your perfect trip`}
      />

      {/* Search and Filters */}
      <SearchAndFilter
        onSearch={handleSearch}
        specialties={specialties}
        selectedSpecialty={selectedSpecialty}
        onSpecialtyChange={handleSpecialtyChange}
      />

      {/* Agents Grid */}
      <AgentsGrid agents={filteredAgents} onContact={handleContact} />
    </div>
  );
};

const Agents = Object.assign(AgentsRoot, {
  SearchAndFilter,
  AgentsGrid,
});

export default memo(Agents);
