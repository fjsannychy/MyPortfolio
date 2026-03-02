import type { Skill } from "./Skill";

export interface SkillGroup {
  icon: string;
  title: string;
  skills: Skill[]
}