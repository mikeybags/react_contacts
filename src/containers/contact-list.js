import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/index.js';
import { selectContact } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: null }
    }

    componentWillMount() {
        this.props.fetchContacts();
    }

    handleClick(contact, index) {
        this.props.selectContact(contact);
        this.setState({ activeIndex: index })
    }
    
    renderList() {
        if (!this.props.contacts) {
            return (
                <div id="loading">Loading contact list...</div>
            );
        }

        return this.props.contacts.map((contact, index) => {
            return (
                <li
                    onClick={() => this.handleClick(contact, index)}
                    key={index}
                    className={ this.state.activeIndex === index ? 'contact-card selected': 'contact-card'}>
                    <div className="list-photo">
                        <img src={contact.smallImageURL} alt='Headshot' />
                    </div>
                    <div className="list-info">
                        <p className="list-name">{contact.name}</p>
                        {contact.phone.mobile ? <p className="list-phone">{contact.phone.mobile} (Mobile)</p> : <p className="list-phone">{contact.phone.home} (Home)</p>}
                        {contact.favorite ? <i className="favorite fa fa-star" aria-hidden="true"></i>  : ''}
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchContacts, selectContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);