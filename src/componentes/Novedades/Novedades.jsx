import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import img from "../Media/Img/SinTítulo.jpg"

function Novedades() {
    return(
        <div className='container-Novedades' >
            <h2>Novedades</h2>
        <Card>
            <Card.Header>
            <div className='imgNovedades'><Image src={img} fluid /></div>
            </Card.Header>
            <Card.Body>
                
                <blockquote className="blockquote mb-5">
                <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
        <br/>
        <br/>
        <Card>
            <Card.Header>
                <div className='imgNovedades'><Image src={img} fluid /></div>
            </Card.Header>
            <Card.Body>
                
                <blockquote className="blockquote mb-5">
                <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Novedades;