import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { RandomMealType, ApiResponse } from '../../types/RandomMealTypes';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchMealPage(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [search, setSearch] = useState<RandomMealType[] | null>(null);

  const searchMeal = async (): Promise<void> => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
      const data = (await response.json()) as ApiResponse;

      if (data.meals) {
        setSearch(data.meals);
      } else {
        setSearch(null);
      }
    } catch (error) {
      console.error(error);
      setSearch(null);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20px',
        height: '800px',
        width: '75vw',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexGrow: 0,
          marginBottom: '10px',
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: 'rgb(116, 118, 121)',
            borderRadius: '15px',
            width: '400px',
          }}
        >
          <Toolbar>
            <Search>
              <StyledInputBase
                placeholder="Search meal…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: '200px' }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Search>
            <Button
              variant="contained"
              size="medium"
              sx={{ marginLeft: '10px', backgroundColor: 'rgb(77, 78, 83)' }}
              onClick={() => void searchMeal()}
            >
              Find
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {search && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {search.map((meal) => (
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                width: '350px',
                margin: '10px',
                padding: '0px',
              }}
              key={meal.idMeal}
            >
              <CardMedia
                sx={{ display: 'flex', height: '300px', width: '350px', fontSize: '10px' }}
                image={meal.strMealThumb}
                title="meal photo"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: '15px',
                    fontFamily: 'Sen, sans-serif',
                    fontOpticalSizing: 'auto',
                    fontStyle: 'normal',
                    fontWeight: 800,
                  }}
                >
                  {meal.strMeal}
                </Typography>

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: '10px',
                    fontFamily: 'Sen, sans-serif',
                    fontOpticalSizing: 'auto',
                    fontStyle: 'normal',
                  }}
                >
                  {meal.strInstructions}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
