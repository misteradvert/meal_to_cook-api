export type RandomMealType = {
  idMeal: string; // id
  strMeal: string; // название блюда
  strInstructions: string; // рецепт
  strMealThumb: string; // фото блюда
  strSource: string; // исчтоник - "Подробнее"
};

export type ApiResponse = { meals: RandomMealType[] };
