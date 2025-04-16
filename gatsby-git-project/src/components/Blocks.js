import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Blocks = ({ postId }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`http://localhost/wordpress-headless-1/wp-json/wp/v2/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        const blocks = data.content.rendered;
        setContent(blocks);
      })
      .catch((error) => console.error('Error fetching block:', error));
  }, [postId]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

Blocks.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Blocks;
