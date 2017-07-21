import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        this.renderMap(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.lat !== nextProps.lat || this.props.lng !== nextProps.lng) {
            this.renderMap(nextProps);
        }
    }
    
    renderMap(props) {
        var map = new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: props.lat, 
                lng: props.lng
            }
        })
        var marker = new google.maps.Marker({
            position: {
                lat: props.lat, 
                lng: props.lng
            },
            map: map
        });
    }

    render() {
        return <div id="map" ref="map" />
    }
}

export default GoogleMap;