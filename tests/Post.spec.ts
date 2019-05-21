import { Connection, createConnection } from 'typeorm'
import { Category } from '../src/entities/Category'
import { Post } from '../src/entities/Post'


describe('Post tests', () => {
	let connection : Connection
	beforeEach(async () => {
		connection = await createConnection({
			type: 'sqlite',
			database: './test.sql',
			entities: [
				__dirname + '/../src/entities/**/*.ts'
			],
			synchronize: true,
			dropSchema: true
		})
	})

	it('should create a post', async () => {
		let category1: Category
		category1 = new Category()
		category1.name = "TypeScript";
		await connection.manager.save(category1);

		expect(category1.id).toEqual(1)

		const category2 = new Category();
		category2.name = "Programming";
		await connection.manager.save(category2);

		expect(category2.id).toEqual(2)

		const post = new Post();
		post.title = "Control flow based type analysis";
		post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
		post.categories = [category1, category2];

		await connection.manager.save(post);

		expect(post.id).toEqual(1)
	})
})
