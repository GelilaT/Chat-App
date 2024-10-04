import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import "reflect-metadata";
import { Participant } from "./participant";
import { Message } from "./message";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ unique: true })
    userName!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => Message, (message) => message.user)
    messages!: Message[];

    @OneToMany(() => Participant, (participant) => participant.user)
    participants!: Participant[]


}
