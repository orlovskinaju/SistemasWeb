import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user_tokens')
export default class user_tokens{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    @Generated('uuid')
    token: string;
    @Column()
    user_id: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    
   
}