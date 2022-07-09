import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
	@Column({ primary: true, type: 'varchar', length: 20, nullable: false })
	uid: string;

	@Column({ type: 'varchar', length: 50, nullable: false })
	email: string;

	@Column({ type: 'varchar', length: 30, nullable: false })
	nickname: string;

	@Column({ type: 'varchar', length: 30, nullable: false })
	password: string;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;

	@DeleteDateColumn()
	deleteAt: Date;
}
