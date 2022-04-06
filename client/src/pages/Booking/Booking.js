import React from 'react'
import './Booking.css'
function Booking() {



    return (
        <>
            <section className="banner">
                <h2>BOOK YOUR FLIGHT NOW</h2>
                <div class="card-container">
                    <div class="card-img">
                        <img src=".//booking.png" alt='' />
                    </div>

                    <div class="card-content">
                        <h3>Reservation</h3>
                        <div className='form'>
                        <div className='input-grp'>
                                <label>Passenger First Name</label>
                                <input type="text" className='from-control' placeholder='First Name' />
                            </div>
                            <div className='input-grp'>
                                <label>Passenger Last Name</label>
                                <input type="text" className='from-control' placeholder='Last Name' />
                            </div>
                            <div className='input-grp'>
                                <label>Date Birth</label>
                                <input type="date"  className="form-control select-date"  />
                            </div>
                            <div className='input-grp'>
                                <label>Phone Number</label>
                                <input type="number" className='from-control' placeholder='########' />
                            </div>
                            <div className='input-grp'>
                                <label>Email</label>
                                <input type="mail" className='from-control' placeholder='Email' />
                            </div>
                            <div className='input-grp'>
                                <label>Address</label>
                                <input type="text" className='from-control' placeholder='Address' />
                            </div>
                            <div className='input-grp'>
                                <label> Flying Form</label>
                                <input type="text" className='from-control' placeholder='City or Airport' />
                            </div>
                            <div className='input-grp'>
                                <label> Flying To</label>
                                <input type="text" className='from-control' placeholder='City or Airport' />
                            </div>
                            <div className='input-grp'>
                                <label>Departing</label>
                                <input type="date" className="form-control select-date" />
                            </div>
                            <div className='input-grp'>
                                <label>Returing</label>
                                <input type="date" className="form-control select-date" />
                            </div>
                            <div className='input-grp'>
                                <label>Adults</label>
                                <input type="number" className="form-control" value="1" />
                            </div>
                            <div className='input-grp'>
                                <label>Children</label>
                                <input type="number" className="form-control" value="0" />
                            </div>
                            <div className='input-grp'>
                                <label>Travel Class</label>
                                <select className="custom-select">
                                    <option value="1">Economy Class</option>
                                    <option value="2">Business Class</option>
                                </select>
                            </div>
                            <div className='input-grp'>
                                <label>Passport Number</label>
                                <input type="number" className='from-control' placeholder='########' />
                            </div>
                            <div className='input-grp'>
                                <label>Passport Expiration Date</label>
                                <input type="date" className="form-control select-date"/>
                            </div>
                            <div className='input-grp'>
                                <button type='button' className='btn btn-primary flight'>Show Flights</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Booking