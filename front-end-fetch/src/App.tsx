
import { useEffect, useState } from 'react'
import './App.css'
import { createNewPost, getAllPosts } from './service'

interface Post{
  title: string;
}
function App() {
  const [data, setData] = useState<Post[]>([]);
  // Fetch API là gì ? : dùng để gửi request và nhận response trả về từ các API

  // fetch(); // trả về 1 Promise -> dùng cơ chế .then, .catch để xử lý , kết async await để xử lí bất đồng bộ
  useEffect(() => {
    // call api   get
      const data = getAllPosts();
      data.then((data) => {
        console.log(data);
        setData(data);
      }).catch(err=>{
        console.log("err"+err);
        
      })

      // call post 
      // const data = {
      //   "userId": 2,
      //   "title": "Tâm Anh ngủ quên ",
      //   "body": "Do thức khuya + lười đi học"
      // }

      // createNewPost(data)
      // .then(data=>{
      //   console.log("new data");
      //   console.log(data);    
      // })
  }, [])
  return (
    <>
      {data.map((d, index)=> <li key={index}>{d.title}</li>)}
    </>
  )
}

export default App
