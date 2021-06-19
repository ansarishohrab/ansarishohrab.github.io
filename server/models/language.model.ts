import { Column, Model, Table } from "sequelize-typescript";

export interface LanguageI {
  name: string;
  level: string;
  rating: number;
}

@Table
export default class Language extends Model implements LanguageI {
  @Column
  name!: string;
  @Column
  level!: string;
  @Column
  rating!: number
}
