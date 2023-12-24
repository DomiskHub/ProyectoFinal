 import React, { useContext } from 'react';
import { GlobalContext } from '../context/CardContext';
import { Card, Button } from 'react-bootstrap';


const MyPosts = () => {
  const { posts, setPosts, addToGallery } = useContext(GlobalContext);

  const handleRemovePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="grid-container">
    {posts.map((post, index) => (
      <Card className="text-center" key={index} style={{ width: "18rem" }}>
        <Card.Img className="catcard-img" variant="top" src={post.formPhoto} />
        <Card.Body>
          <Card.Title>{post.formFirstName}</Card.Title>
          <Card.Text>{post.formDescrip}</Card.Text>
          <Button variant="primary" onClick={() => addToGallery(post)}>
            Publicar en galeria
          </Button>
          <Button variant="danger" onClick={() => handleRemovePost(post.id)}>
            Borrar
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
  );
};

export default MyPosts