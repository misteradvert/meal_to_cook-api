export type MealType = {
  idCategory: string; // id
  strCategory: string; // название категории
  strCategoryThumb: string; // ссылка на фото
  strCategoryDescription: string; // описание категории
};

export type ApiRes = { categories: MealType[] };
