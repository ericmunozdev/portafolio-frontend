import { iSkill } from '../interfaces/skill.interface';

/**
 * Formatea una habilidad y sus dependencias.
 * Ej: { name: 'C#', children: [{ name: '.NET 6' }, { name: '.NET 8', children: [{ name: 'Otro 1' }, { name: 'Otro 2' }] }] } -> 'C# (.NET 6 | .NET 8 (Otro 1 | Otro 2))'
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
