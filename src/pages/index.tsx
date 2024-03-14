import React, { useState, useEffect } from 'react';
import BlogCard from '../components/blog/BlogCard';
import { API } from 'aws-amplify'
import { listTodos } from '../graphql/queries'


interface BlogData {
  id: String;
  data: object;
  userId: string;
  image: string;
  title: string;
  description: String;
}

const Home: React.FC = () => {
  const [data, setData] = useState<BlogData[]>([]);
  const [listData, setListData] = useState([])


  const fetchData = async () => {
    const response = await API.graphql({ query: listTodos });
    setData(response.data.listTodos.items)
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <main className={``}>
      <div className='bg-[#F0F2F5]'>
        {/* {
          data.map(({ id, userId, image, title, description }) => {
            return <div className='p-2 border rounded'>
              <h1>Id: {id}</h1>
              <h1>Title: {title}</h1>
              <h1>Description: {description}</h1>
            </div>
          })
        } */}
        {/* <div className='p-1 w-full sm:w-[80%] md:w-[55%] lg:w-[50%] xl:w-[40%]  mx-auto'>
          {data.map(({ id, name, image_url, user, title, message, images, likes, comments, updated }) => {
            return <BlogCard key={id} id={id} name={name} user={user} title={title} image_url={image_url} message={message} images={images} like={likes} comments={comments} updated={updated} />;
          })}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
