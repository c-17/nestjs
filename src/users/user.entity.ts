import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    createdBy: Date;
}