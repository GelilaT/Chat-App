import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Chat } from "./chat";

@Entity()
export class Participant{

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => User, (user) => user.participants)
    user!: User

    @ManyToOne(() => Chat, (chat) => chat.participants)
    chat!: Chat

}