export type TInfoCard = {
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  image: string;
  route: string;
  button_name: string;
  button_name_en: string;
};

export type TParamsCards = {
  cards_1: TInfoCard;
  cards_2: TInfoCard;
};

export type TCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  button_name: string;
};
