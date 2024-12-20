import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Credential from './Credential';
import { Appointment } from './Appointment';

@Entity({
    name: 'users',
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column({
        length: 100,
    })
    email: string;

    @Column({
        type: 'date',
    })
    birthdate: Date;

    @Column({
        length: 20,
    })
    nDni: string;

    @OneToOne(() => Credential, (credential) => credential.user)
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];
}
