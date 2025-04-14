import { useEffect, useState } from 'react';

const Blocks = ({ postId }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`http://localhost/wordpress-headless-1/wp-json/wp/v2/posts/18`)
            .then((res) => res.json())
            .then((data) => {
                const blocks = data.content.rendered; // Get raw block content
                setContent(blocks);
            })
            .catch((error) => console.error("Error fetching block:", error));
    }, [postId]);

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Blocks;