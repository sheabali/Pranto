// utils/project.ts
import { ProjectType } from '@/components/constant/global';

// Static JSON path (adjust if using API or server)
// const DATA_URL = '/public/data/product.json';

export const getProjectById = async (
  id: number
): Promise<ProjectType | undefined> => {
  const res = await fetch('/data/product.json'); // ✅ Correct path
  if (!res.ok) throw new Error('Failed to fetch project data');

  const projects: ProjectType[] = await res.json();
  return projects.find((project) => project.id === id);
};
