import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import type { RandomMealTypes } from '../../types/RandomMealTypes';

export default function MealsPage(): JSX.Element {
  const [random, setRandom] = useState<RandomMealTypes[]>([]);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        setRandom(response.data.meals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomMeals();
  }, []);

  const [showAllInstructions, setShowAllInstructions] = useState(false);

  return (
    <Container>
      <div style={{ maxWidth: '370px' }}>
        {random.map((meal) => (
          <div key={meal.idMeal} style={{ display: 'flex', marginBottom: '20px' }}>
            <CardMedia
              component="img"
              height="400"
              width="400"
              image={meal.strMealThumb}
              alt={meal.strMeal}
              sx={{ borderRadius: '15px' }}
            />

            <CardContent
              sx={{
                maxHeight: '600px',
                backgroundColor: 'rgb(225, 240, 230)',
                borderRadius: '15px',
                marginLeft: '10px',
              }}
            >
              <div
                style={{
                  color: 'rgb(26, 26, 26)',
                  fontFamily: 'Sen',
                  fontOpticalSizing: 'auto',
                  fontWeight: 800,
                  fontSize: '30px',
                }}
              >
                <p>{meal.strMeal}</p>
              </div>

              <Typography variant="body2" color="text.secondary" sx={{ width: '700px' }}>
                <div
                  style={{
                    color: 'rgb(26, 26, 26)',
                    fontFamily: 'Sen',
                    fontOpticalSizing: 'auto',
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                >
                  {showAllInstructions
                    ? meal.strInstructions
                    : `${meal.strInstructions.slice(0, 250)}...`}
                </div>
              </Typography>

              {meal.strInstructions.length > 250 && (
                <Typography variant="body2" color="text.secondary" sx={{ width: '700px' }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => setShowAllInstructions(!showAllInstructions)}
                  >
                    {showAllInstructions ? 'Show Less' : 'Show All'}
                  </Button>
                </Typography>
              )}

              <Typography variant="body2" color="text.secondary" sx={{ width: '700px' }}>
                <Button
                  variant="contained"
                  size="small"
                  href={meal.strSource}
                  sx={{ marginTop: '20px' }}
                  target="_blank"
                >
                  Get full recipe
                </Button>
              </Typography>
            </CardContent>
          </div>
        ))}
      </div>
    </Container>
  );
}
