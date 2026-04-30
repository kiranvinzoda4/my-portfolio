import type { Project } from "@/types/portfolio";
import { SectionHeader, ProjectCard, FeaturedProjectCard } from "@/components/ui";

interface ProjectsProps {
  items: Project[];
}

export default function Projects({ items }: ProjectsProps) {
  const featured = items.find((p) => p.featured);
  const rest = items.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Projects" title="Featured Work" />
        <p className="-mt-10 mb-14 text-center text-sm text-muted">
          A collection of {items.length} projects spanning enterprise SaaS and
          AI-powered applications
        </p>

        {/* Featured project — wide showcase card */}
        {featured && (
          <div className="mb-12">
            <FeaturedProjectCard {...featured} />
          </div>
        )}

        {/* Rest of projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
