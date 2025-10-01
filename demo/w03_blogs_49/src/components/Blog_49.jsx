import { FaGlobe } from 'react-icons/fa6';
import { FaMugSaucer } from 'react-icons/fa6';

const Blog_49 = ({ id, img, category, title, descrip }) => {
  return (
    <article key={id} className='blog'>
      <img src={img} alt='coffee photo' className='img blog-img' />
      <div className='blog-content'>
        <span>
          {category}
          {category === 'lifestyle' ? <FaMugSaucer /> : <FaGlobe />}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <a href='#'>read more</a>
      </div>
    </article>
  );
};

export default Blog_49;
