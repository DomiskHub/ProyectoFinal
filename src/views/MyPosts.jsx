import { useContext } from "react";
import { GlobalContext } from "../context/CardContext";
import { Card, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const MyPosts = () => {
  const { posts, setPosts, addToGallery, removeFromGallery } = useContext(GlobalContext);

  const handleRemovePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    removeFromGallery(postId);
  };

  return (
    <div className="grid-container">
      {posts.map((post, index) => (
        <Card className="text-center" key={index} style={{ width: "18rem" }}>
          <Card.Img className="catcard-img" variant="top" src={post.formPhoto instanceof File ? URL.createObjectURL(post.formPhoto) : post.formPhoto} />
          <Card.Body>
            <Card.Title>{post.formFirstName}</Card.Title>
            <Card.Text>{post.formDescrip}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <strong>Sexo:</strong> {post.formSexo}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Color:</strong> {post.formColor}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Edad:</strong> {post.formEdad}
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <Button variant="primary" onClick={() => addToGallery(post)}>
                  Publicar en galeria
                </Button>
                <Button variant="danger" onClick={() => handleRemovePost(post.id)}>
                  Borrar
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default MyPosts;
