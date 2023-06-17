import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'Resource'})
export class Resource {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'Api'})
    api: string

    @Column({name: 'Description'})
    description: string

    @Column({name: 'Auth'})
    auth: string

    @Column({name: 'HTTPS', type: "boolean"})
    https: boolean

    @Column({name: 'Cors'})
    cors: string

    @Column({name: 'Link'})
    link: string

    @Column({name: 'Category'})
    category: string

}
