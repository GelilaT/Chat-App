import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Chat } from "./chat";

@Entity()
export class Message{
    
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    content!: String;

    @CreateDateColumn()
    createdAt!: Date

    @ManyToOne(() => User, (user) => user.messages)
    user!: User;

    @ManyToOne(() => Chat, (chat) => chat.messages)
    chat!: Chat;

}