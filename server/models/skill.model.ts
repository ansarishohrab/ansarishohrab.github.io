import { Column, Model, Table } from "sequelize-typescript";

export interface SkillI {
  name: string;
  description: string;
  level: string;
}

@Table
export default class Skill extends Model implements SkillI {
  @Column
  name!: string;
  @Column
  description!: string;
  @Column
  level!: string;
}
