import { iSkill } from '../../../core/domain/cv.model';

/**
 * Formatea una habilidad y sus dependencias.
 * Ej: { name: 'C#', children: [{ name: '.NET 6' }, { name: '.NET 8', children: [{ name: 'ASP.NET Core' }, { name: 'EF Core' }] }] } -> 'C# (.NET 6 | .NET 8 (ASP.NET Core | EF Core))'
 */
export function formatSkill(skill: iSkill): string {
  if (!skill.children?.length) {
    return skill.name;
  }

  return `${skill.name} (${skill.children.map(formatSkill).join(' | ')})`;
}

/**
 * Formatea un listado de habilidades separándolas por coma.
 */
export function formatSkills(skills: iSkill[]): string {
  return skills.map(formatSkill).join(', ');
}
