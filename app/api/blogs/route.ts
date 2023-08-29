import { addPost, getPosts } from '@/lib/data';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, res: Response) => {
	try {
		const posts = getPosts();
		return NextResponse.json(
			{ message: 'Ok', posts },
			{
				status: 200,
			}
		);
	} catch (err) {
		return NextResponse.json(
			{ message: 'Something went wrong', err },
			{
				status: 500,
			}
		);
	}
};

export const POST = async (req: Request, res: Response) => {
	const { title, description } = await req.json();

	try {
		const post = {
			id: Date.now().toString(),
			title,
			description,
			created_at: new Date(),
		};
		addPost(post);
		return NextResponse.json(
			{ message: 'Ok', post },
			{
				status: 201,
			}
		);
	} catch (err) {
		return NextResponse.json(
			{ message: 'Something went wrong', err },
			{
				status: 500,
			}
		);
	}
};
