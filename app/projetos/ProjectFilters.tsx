'use client';

import { useState } from 'react';
import ProjectCard from '../ProjectCard';
import { projectCategories, projects, type ProjectCategory } from '../projects-data';

type Filter = 'Todos' | ProjectCategory;

export default function ProjectFilters() {
  const [filter, setFilter] = useState<Filter>('Todos');
  const visibleProjects = filter === 'Todos' ? projects : projects.filter((project) => project.category === filter);
  return <>
    <div className="project-filters" aria-label="Filtrar projetos">
      {(['Todos', ...projectCategories] as Filter[]).map((item) => <button aria-pressed={filter === item} className={filter === item ? 'is-active' : ''} key={item} type="button" onClick={() => setFilter(item)}>{item}</button>)}
    </div>
    <div className="projects-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
  </>;
}
