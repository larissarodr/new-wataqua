import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('stock')
class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  from_wild: boolean;

  @Column()
  collection_date: Date;

  @Column()
  collection_location: string;

  @Column()
  collection_details: string;

  @Column()
  date_of_birth: Date;

  @Column()
  has_parents: boolean;

  @Column()
  mom_id: string;

  @ManyToOne(() => Stock)
  @JoinColumn({ name: 'mom_id' })
  mom: Stock;

  @Column()
  dad_id: string;

  @ManyToOne(() => Stock)
  @JoinColumn({ name: 'dad_id' })
  dad: Stock;

  @Column()
  responsible_user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'responsible_user_id' })
  responsible_user: User;

  @Column()
  relevance: string;

  @Column()
  comment: string;

  @Column()
  genotype: string;

  @Column()
  phenotype: string;

  @Column()
  number_of_males: number;

  @Column()
  number_of_females: number;

  @Column()
  number_of_hermaphrodites: number;

  @Column()
  number_of_juveniles: number;

  @Column()
  has_dna_sample: boolean;

  @Column()
  dna_sample_details: string;

  @Column()
  has_other_sample: boolean;

  @Column()
  other_sample_details: string;

  @Column()
  amount_founder_fish: number;

  @Column()
  last_check_date: Date;

  @Column()
  last_check_user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'last_check_user_id' })
  last_check_user: User;

  @Column()
  photo1: string;

  @Column()
  photo2: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Stock;
