import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Comments {
	@Column({ primary: true, type: 'varchar', length: 20, nullable: false })
	cmid: string;

	@Column({ type: 'varchar', length: 20, nullable: false })
	bid: string;

	@Column({ type: 'varchar', length: 20, nullable: false })
	uid: string;

	@Column({ type: 'varchar', length: 1000, nullable: false })
	content: string;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;

	@DeleteDateColumn()
	deleteAt: Date;
}
