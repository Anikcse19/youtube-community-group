import React from 'react';

const Cart = (props) => {

    const { singleMember } = props
    let total = 0;
    for (const member of singleMember) {
        total = total + member.hounarium
    }


    return (
        <div className='bg'>
            <h4 style={{
                fontFamily: 'Gluten',
                fontWeight: 'bolder',
                color: "black"
            }}>Youtuber Added: {props.singleMember.length}</h4>

            <h2 style={{
                fontFamily: 'Gluten',
                fontWeight: 'bolder',
                color: 'black'

            }}>Total Cost: {total}M</h2>


            <div >
                <br />
                <h5 style={{
                    fontFamily: 'Gluten',
                    fontWeight: 'bolder',
                    color: 'black',
                    textAlign: 'center'
                }}>My Hired Authority</h5>


                {/* showed the clicked youtubers dynamically */}
                {

                    props.singleMember.map(member => {
                        return (<div className='d-flex m-2 rounded shd  bg-white'>
                            <img className='p-1' width='60px' height='60px' src={member.img} alt="" />
                            <h4 style={{
                                color: 'black',
                                alignItems: 'center',
                                justifyContent: 'center'

                            }}>{member.channelName}</h4>
                        </div>
                        )
                    })

                }
            </div>
            <button className="btn btn-success">Invite Now</button>

        </div>
    );
};

export default Cart;