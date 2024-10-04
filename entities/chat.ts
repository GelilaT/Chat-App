import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Participant } from "./participant";
import { Message } from "./message";

@Entity()
export class Chat{

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @OneToMany(() => Message, (message) => message.chat)
    messages!: Message[]

    @OneToMany(() => Participant, (participant) => participant.chat)
    participants!: Participant[]
}