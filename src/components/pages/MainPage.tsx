import React from 'react';
import Button from '@mui/material/Button';

export default function MainPage(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p
        className="headline"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: 'auto',
          color: 'rgb(190,214,0)',
        }}
      >
        What to cook for a dinner?
      </p>

      <div>
        <img
          style={{ width: '600px' }}
          src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614545736_12-p-yeda-na-belom-fone-32.png"
          alt="meal pic on main page"
        />
      </div>

      <div style={{ margin: '10px' }}>
        <Button variant="contained" size="medium" href="/randommeal">
          Generate meal
        </Button>
      </div>
    </div>
  );
}
