import { useState, useEffect } from 'react';
// import blogData_49 from '../../assets/data/blogData.json';
import Blog_49 from '../../components/Blog_49';

const api_url = 'http://localhost:5000/api/blog_49';

const BlogNodePage_49 = () => {
  const [name, setName] = useState('huhao');
  const [id, setId] = useState(213417149);
  const [blogs_49, setBlogs_49] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs_49(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>
          blogs from Node -- {name}, {id}{' '}
        </h2>
      </div>
      <div className='blogs-center'>
        {blogs_49.map((item) => {
          const { id, title, descrip, category, img } = item;
          return (
            <Blog_49
              key={id}
              id={id}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogNodePage_49;
