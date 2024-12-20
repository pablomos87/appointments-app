import { Column, Entity, ManyToOne,  PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { StatusAppoint } from "../enums/StatusAppoint"

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        type: 'date',
    })
    date: Date

    @Column()
    time: string

    @Column()
    doctor: string

    @Column({ 
        type: 'enum',
        enum: StatusAppoint,
        default: StatusAppoint.ACTIVE })

    status: StatusAppoint

    @ManyToOne(() => User, (user) => user.appointments)
    user: User    
}

