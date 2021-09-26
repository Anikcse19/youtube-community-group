import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAllergies } from '@fortawesome/free-solid-svg-icons';
import { ButtonGroup, Card } from 'react-bootstrap';
import "./MainBody.css"

const MainBody = (props) => {

    // destructuring-----------
    const { img, channelName, contentNumber, nationality, subscriber, hounarium } = props.youtuber

    // font awesome icon ---
    const element = <FontAwesomeIcon className='mt-1 me-1' icon={faAllergies} />
    return (
        <div className=" col-md-4 col g-3 w-100% mx-auto">

            {/* single youtuber Card  */}
            <Card className='card' style={{
                width: '18rem',
            }}>
                <Card.Img className='img' variant="top" src={props.youtuber.img} />
                <Card.Body>
                    < h6 style={{
                        fontFamily: 'Ephesis',
                        textAlign: 'center',
                        fontWeight: 'bolder',
                        fontSize: 'x-large'


                    }}>Channel: {channelName}</ h6>
                    < h6 style={{
                        fontFamily: 'Gluten',
                        fontWeight: 'bolder'

                    }}>Content Create: {contentNumber}</ h6>
                    < h6 style={{
                        fontFamily: 'Gluten',
                        fontWeight: 'bolder'
                    }}>nationality: {nationality}</ h6>
                    < h6 style={{
                        fontFamily: 'Gluten',
                        fontWeight: 'bolder'
                    }}>subscriber: {subscriber}</ h6>
                    < h6 style={{
                        fontFamily: 'Gluten',
                        fontWeight: 'bolder'
                    }}>hounarium: {hounarium}</ h6>

                    <ButtonGroup className='btn w-100 mx-auto btn-outline-primary' onClick={() => { props.handleHire(props.youtuber) }} variant="primary"><small className='ms-5 fs-4'>{element} Hire Now</small> </ButtonGroup><br />
                    <div className='text-center fw-bolder fs-2 text-danger'><i class="fab fa-youtube"></i></div>
                </Card.Body>
            </Card>
        </div>





    );
};

export default MainBody;