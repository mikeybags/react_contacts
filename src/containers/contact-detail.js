import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';

class ContactDetail extends Component { 
    render() {
        const activeContact = this.props.activeContact;

        if (!activeContact) {
            return (
                <div className="detail-empty">
                    <h2>Select a contact to display their detailed information.</h2>
                </div>
            );
        }

        return (
            <div className="contact-details"> 
                {activeContact.favorite ? <i className="favorite fa fa-star fa-2x" aria-hidden="true"></i>  : ''}
                <div className="detail-header"> 
                    <div className="header-image">
                        <img className="large-image" src={activeContact.largeImageURL} alt="Headshot" />
                    </div>
                    <div className="info-header">
                        <h3 id="header-name" className="data-value">{activeContact.name}</h3>
                        <p className="data-title">Company:</p>
                        <p className="data-value">{activeContact.company}</p>
                    </div>
                </div>
                <div className="info-body">
                    <div className="info-body-section">
                        <p className="data-title">Phone:</p>
                        {activeContact.phone.home? <p className="data-value">{activeContact.phone.home} <span className="contact-type data-value">Home</span></p> : ''}
                        {activeContact.phone.mobile? <p className="data-value">{activeContact.phone.mobile} <span className="contact-type data-value">Mobile</span></p> : ''}
                        {activeContact.phone.work? <p className="data-value">{activeContact.phone.work} <span className="contact-type data-value">Work</span></p> : ''}
                    </div>
                    <div className="info-body-section">
                        <div><GoogleMap lng={activeContact.address.longitude} lat={activeContact.address.latitude} /></div>
                        <p className="data-title">Address:</p>
                        <p className="data-value">{activeContact.address.street}</p>
                        <p className="data-value">{activeContact.address.city}, {activeContact.address.state} {activeContact.address.zip} </p>
                    </div>
                    <div className="info-body-section">
                        <p className="data-title">Birthday:</p>
                        <p className="data-value">{activeContact.formattedBirthdate}</p>
                    </div>
                    <div className="info-body-section">
                        <p className="data-title">Email:</p>
                        <p className="data-value">{activeContact.email}</p>
                    </div>
                    <div className="info-body-section">
                        <p className="data-title">Website:</p>
                        <p className="data-value">{activeContact.website}</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeContact: state.activeContact
    }
}   

export default connect(mapStateToProps)(ContactDetail);