import { AppHead } from "@/shared/components/AppHead";
import { InfoCards } from "@/shared/components/InfoCards";
import { Bitter } from "next/font/google";
const inter = Bitter({ subsets: ["latin"] });
export default function About() {
  const MetaData = {
    title: "МПК Русь - производство и установка лестниц в Тюмени",
    description:
      "Компания занимается изготовлением, производством, установкой и реализацией лестниц по выгодным ценам в городе Тюмени",
    keywords:
      "лестницы, лестницы на второй, продажа лестниц, готовые лестницы, деревянные лестницы, металлические лестницы, модульные лестницы, стеклянные лестницы, малогабаритные лестницы, чердачные лестницы, наружные лестницы, винтовые лестницы, г-образные лестницы, п-образные лестницы, маршевые лестницы, лестницы Долле, лестницы Атриум, итальянские лестницы, лестницы на заказ, ограждения лестниц, комплектующие для лестниц, аксессуары для лестниц",
  };
  const cards = [
    {
      title: "Собственное производство",
      description: "Мы создаем конструкции, которые служат годами.",
      image: "/images/stairs14.jpeg",
      link: "tel:+79829895209",
      button_name: "получить консультацию",
    },
    {
      title: "Бесплатный замер",
      description:
        "Наш специалист приедет в удобное для вас время, чтобы точно оценить проект и учесть все ваши пожелания.",
      image: "/images/stairs18.jpeg",
      link: "tel:+79829895209",
      button_name: "получить консультацию",
    },
  ];

  const cards2 = [
    {
      title: "Изготовление лестниц напрямую от производителя",
      description:
        "Мы предлагаем лестницы по выгодным ценам, так как работаем без посредников. Наша продукция на 15-25% дешевле благодаря прямым продажам с завода.",
      image: "/images/stairs29.jpeg",
      link: "tel:+79829895209",
      button_name: "получить консультацию",
    },
    {
      title:
        "Качество материалов - используем только проверенные и долговечные материалы",
      description:
        "В производстве используем только высококачественные материалы, прошедшие строгий контроль, что гарантирует долговечность и надежность наших лестниц.",
      image: "/images/stairs27.jpeg",
      link: "tel:+79829895209",
      button_name: "получить консультацию",
    },
  ];

  return (
    <>
      <AppHead
        title={MetaData.title}
        description={MetaData.description}
        keywords={MetaData.keywords}
      />

      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[10px] mt-8">
          <div className="container">
            <h1 className="md:text-[40px] max-md:text-xl max-md:mb-2">
              Изготовление и установка лестниц в Тюмени
            </h1>
            <InfoCards
              className="py-[70px] md:py-[95px] lg:py-[120px]"
              blocks={cards}
            />
          </div>
          <div className="container">
            <InfoCards className="" blocks={cards2} />
          </div>
        </div>
      </div>
    </>
  );
}
