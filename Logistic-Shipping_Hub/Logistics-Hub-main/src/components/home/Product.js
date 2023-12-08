import React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import data
import { product } from './data';
// import components
// import Cards from './Cards';

const Product = () => {
  // destructure product data
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchLocations();
    }
  }, [userLocation]);

  const fetchLocations = async () => {
    try {
      const radius = 10;
      const query = `
        SELECT *
        FROM locations
        WHERE
        ACOS(
          SIN(RADIANS(${userLocation.lat})) * SIN(RADIANS(latitude)) +
          COS(RADIANS(${userLocation.lat})) * COS(RADIANS(latitude)) *
          COS(RADIANS(${userLocation.lng} - longitude))
        ) * 6371 <= ${radius}
        LIMIT 5;`;

      const response = await axios.post('http://localhost:8081/location', {
        queryType: 'custom',
        customQuery: query,
      });

      const nearbyLocations = response.data.result;
      setLocations(nearbyLocations); // Update state with fetched locations
    } catch (error) {
      console.error('Error querying nearby locations:', error);
    }
  };

  useEffect(() => {
    if (userLocation) {
      initMap();
    }
  }, [userLocation, locations]);

  function initMap() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: userLocation,
      zoom: 15,
    });
  
    const userMarker = new window.google.maps.Marker({
        position: userLocation,
    map: map,
    title: 'You are here!',
    icon: {
      url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // URL to a red marker icon
      scaledSize: new window.google.maps.Size(42, 42), // Adjust the size as needed
    },
    });
  
    const markers = locations.map((place) => {
      return new window.google.maps.Marker({
        position: { lat: place.latitude, lng: place.longitude },
        map: map,
        title: place.name,
      });
    });
  
    // Create a LatLngBounds object to contain all markers
    const bounds = new window.google.maps.LatLngBounds();
  
    // Extend the bounds with each marker's position
    markers.forEach(marker => bounds.extend(marker.getPosition()));
  
    // Fit the map to the bounds
    map.fitBounds(bounds);
  }
  

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDEQ4J-WXRoHlO9LuaCfoMcOITAV6ySZr4&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const { title, subtitle } = product;
  return (
    <section className='section' id='product'>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
            <div className='pretitle'>{pretitle}</div>
        {/* title & subtitle */}
        <div className='flex flex-col items-center lg:flex-row mb-10 lg:mb-20'>
        <div id="map" style={{ height: '600px', width: '70%' }}></div>
        </div>
        <div className='flex-1' data-aos='fade-left' data-aos-offset='300' data-aos-delay='-100'>
        </div>
        </div>
        </div>
        {/* cards */}
        {/* <Cards /> */}
      </div>
    </section>
  );
};

export default Product;
