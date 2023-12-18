import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/CardContext'; 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DetailCard = () => {
    const { id } = useParams();
    const { cats } = useContext(GlobalContext);
    const [cat, setCat] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('ID from useParams:', id);
        console.log('Cats from GlobalContext:', cats);
        const catDetail = cats.find((cat) => cat.id === id);



        if (catDetail) {
            setCat(catDetail);
            setLoading(false);
        }
    }, [id, cats]);

    if (loading) {
        return <div className='container-detail-card-dani'>Cargando...</div>;
    }

    return (
        
        
        <div className='container-detail-card-dani'>
        {loading ? <>cargando</>: <Card className="detail-card-dani">
                <Card.Img variant="top" src={cat.imagen} />
                <Card.Body>
                    <Card.Title>
                        <strong>{cat.nombre}</strong>
                    </Card.Title>
                    <Card.Text>{cat.descripcion}</Card.Text>
                    <div>
                        <Button variant="info">Adoptar</Button>
                    </div>
                </Card.Body>
            </Card>}
        </div>
    );
};

export default DetailCard;