import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Types {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( 'varchar', { length: 50, comment: '유저 이름' })
    name: string;

    @Column( 'tinyint', { comment: '유저 나이' })
    age: number;

    @Column( 'varchar', { length: 20, comment: '유저 번호' })
    phone: string;
}