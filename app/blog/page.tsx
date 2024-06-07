import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Post {
    slug: string;
    title: string;
}

const Blog: React.FC = async () => {
    const posts = await getPosts();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="w-full max-w-5xl text-center">
                <h1 className="text-4xl font-bold mb-8">Blog</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link href={`/posts/${post.slug}`}> {post.title} </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

async function getPosts() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
        .filter(filename => filename.endsWith('.md'))
        .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Ensure file content is parsed correctly
        const lines = fileContents.split('\n');
        const title = lines[0].replace('# ', '');

        return {
            slug: filename.replace(/\.md$/, ''),
            title,
        };
    });

    return posts;
}

export default Blog;
