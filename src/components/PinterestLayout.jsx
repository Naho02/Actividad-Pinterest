import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
      <PinCard size='small' tam='small_icons' image='https://i.pinimg.com/236x/ea/a3/33/eaa33390b1fffece1a91a539d633f60e.jpg'/>
      <PinCard size='medium' tam='medium_icons' image='https://i.pinimg.com/236x/90/57/66/905766380be267fadf9b7feb60a47f21.jpg'/>
      <PinCard size='large' tam='large_icons' image='https://i.pinimg.com/236x/3c/48/4f/3c484f02b860ca1df568c203eb6116b9.jpg'/>
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: '10px 0px 0px 0px',
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },
};

export default PinterestLayout;
