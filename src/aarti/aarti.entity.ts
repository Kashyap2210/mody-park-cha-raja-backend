import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('aartis')
export class Aarti {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  titleEN: string;

  @Column({ type: 'varchar', length: 255 })
  titleMR: string;

  @Column({ type: 'text' })
  englishVersion: string;

  @Column({ type: 'text' })
  hindiVersion: string;

  @Column({ type: 'int', nullable: true, name: 'display_order' })
  displayOrder: number;

  @CreateDateColumn({ type: 'datetime' })
  createdOn: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: true })
  updatedOn: Date;

  @Column({ type: 'varchar', length: 255 })
  createdBy: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  updatedBy: string;
}
