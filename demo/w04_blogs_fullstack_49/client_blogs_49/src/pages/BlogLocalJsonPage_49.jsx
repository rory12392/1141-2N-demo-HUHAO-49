import { useState } from 'react';
import { FaGlobeEurope } from 'react-icons/fa';
import { TbMug } from 'react-icons/tb';

import blogData_49 from '../assets/data/blogData.json';
import Blog_49 from '../components/Blog_49.jsx';

const BlogLocalJsonPage_49 = () => {
  const [name, setName] = useState('huhao');
  const [id, setId] = useState(213417149);
  const [blogs_49, setBlogs_49] = useState(blogData_49);
  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>
          blogs from local json -- {name}, {id}
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

export default BlogLocalJsonPage_49;
