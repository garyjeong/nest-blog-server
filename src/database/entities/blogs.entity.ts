import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Blogs {
	@Column({ primary: true, type: 'varchar', length: 20, nullable: false })
	bid: string;

	@Column({ type: 'varchar', length: 20, nullable: false })
	uid: string;

	@Column({ type: 'varchar', length: 100, nullable: false })
	title: string;

	@Column({ type: 'varchar', length: 3000, nullable: false })
	content: string;

	@Column({ type: 'tinyint', nullable: false })
	ispublic: boolean;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;

	@DeleteDateColumn()
	deleteAt: Date;
}
