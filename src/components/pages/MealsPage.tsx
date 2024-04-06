import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { MealType, ApiRes } from '../../types/MealTypes';

export default function MealsPage(): JSX.Element {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async (): Promise<void> => {
      try {
        const response = await axios.get<ApiRes>(
          'https://www.themealdb.com/api/json/v1/1/categories.php',
        );
        setMeals(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchMeals();
  }, []);

  const handleExpandClick = (mealId: string): void => {
    setExpandedId((prevExpandedId) => (prevExpandedId === mealId ? null : mealId));
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {meals.map((meal) => (
        <Card sx={{ maxWidth: 345 }} key={meal.idCategory}>
          <CardMedia sx={{ height: 210 }} image={meal.strCategoryThumb} title="meal photo" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {meal.strCategory}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {expandedId === meal.idCategory
                ? meal.strCategoryDescription
                : `${meal.strCategoryDescription.substring(0, 200)}...`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleExpandClick(meal.idCategory)}>
              {expandedId === meal.idCategory ? 'Show Less' : 'Learn More'}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
