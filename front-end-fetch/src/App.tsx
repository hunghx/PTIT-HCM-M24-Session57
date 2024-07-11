
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Pagination, Row } from 'react-bootstrap';
import Post from './components/Post';
import { useEffect, useState } from 'react';
import { IPost } from './interface';

import { getPostWithPaginate } from './service/post';
function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    console.log(currentPage);
    
    // thuwjc hien call api lay ra danh sach trang dau tien
    getPostWithPaginate(currentPage, postsPerPage)
      .then(data => {
        setPosts(data);
      }).catch(error => console.log(error))

  }, [currentPage])

  const totalPages = Math.ceil(100 / 9)

  return (
    <div className='container mt-3'>
      <Row>
        {
          posts.map(post =>
            <Col key={post.id} className='mt-4' sm={4}><Post data={post} /></Col>
          )
        }

      </Row>
      <div className='pagination mt-4 d-flex justify-content-end'>
        <Pagination size='lg'>
          {
            Array.from(new Array(totalPages), (_, index) => index + 1).map((page, index) =>
              <Pagination.Item key={page} active={page === currentPage} onClick={()=>setCurrentPage(page)}>
                {page}
              </Pagination.Item>
            )
          }

        </Pagination>
      </div>
    </div>
  )
}

export default App
