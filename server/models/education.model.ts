import { Column, Model, Table } from "sequelize-typescript";

export interface EducationI {
  degree: string;
  college: string;
  startDate: Date;
  endDate: Date;
}

@Table
export default class Education extends Model implements EducationI {
  @Column
  degree!: string;
  @Column
  college!: string;
  @Column
  startDate!: Date;
  @Column
  endDate!: Date;
}
