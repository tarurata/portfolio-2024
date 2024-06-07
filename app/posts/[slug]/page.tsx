// /app/posts/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

interface PostProps {
    params: {
        slug: string;
    };
}

export const generateStaticParams = async () => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => ({
        slug: filename.replace(/\.md$/, ''),
    }));
};

const getPost = async (slug: string) => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const processedContent = await remark()
        .use(html)
        .process(fileContents);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: fileContents.split('\n')[0].replace('# ', ''),
        content: contentHtml,
    };
};

const PostPage = async ({ params }: PostProps) => {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="w-full max-w-5xl text-center">
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
        </main>
    );
};

export default PostPage;
