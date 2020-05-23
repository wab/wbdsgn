import PropTypes from 'prop-types';

export default function PostBody({ content }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />

      <style jsx>{`
        h1 {
          color: palevioletred;
        }
      `}</style>
    </>
  );
}

PostBody.propTypes = {
  content: PropTypes.string,
};
