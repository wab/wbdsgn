import PropTypes from 'prop-types';

import { getPostBySlug } from '@lib/api';
import markdownToHtml from '@lib/markdownToHtml';
import { PostHead, PostBody } from '@components/post';

export default function Home({ post }) {
  const { title, description, content } = post;
  return (
    <div>
      <PostHead title={title} description={description} />
      <PostBody content={content} />
    </div>
  );
}

Home.propTypes = {
  post: PropTypes.object,
};

export async function getStaticProps() {
  const post = getPostBySlug('about', ['title', 'description', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
