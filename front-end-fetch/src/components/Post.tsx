import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { IPost } from '../interface'

const Post = ({data}:{data: IPost}) => {
  return (
    <Card>
      <Card.Header>#{data.id}</Card.Header>
      <Card.Body>
        <Card.Title>{data.title.slice(0,30)}{data.title.length>30?'...':''}</Card.Title>
        <Card.Text>
        {data.body.slice(0,100)}{data.body.length>100?'...':''}
        </Card.Text>
        <Button variant="warning">Details</Button>
      </Card.Body>
    </Card>
  )
}

export default Post
