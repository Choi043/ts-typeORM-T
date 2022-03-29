import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Types {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    phone: string;
}