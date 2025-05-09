import { AppHead } from "@/shared/components/AppHead";
import { Navigation } from "@/shared/components/Navigation/Navigation";
import clsx from "clsx";
import { Bitter } from "next/font/google";
import Image from "next/image";

const inter = Bitter({ subsets: ["latin"] });

export default function Wood() {
  const MetaData = {
    title:
      "Деревянные лестницы в Тюмени — Изготовление и Продажа Под Заказ | МПК Русь",
    description:
      "Изготавливаем и продаём деревянные лестницы в Тюмени: маршевые, винтовые, для дома и дачи. Лестницы под ключ, изготовление деревянных ступеней, лучшие цены. Фото работ и расчёт стоимости на заказ.",
    keywords: "Деревянные лестницы, лестницы на второй этаж",
  };

  return (
    <>
      <AppHead
        title={MetaData.title}
        description={MetaData.description}
        keywords={MetaData.keywords}
      />

      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[10px] mt-8">
          <Navigation />
          <div className="container">
            <h1 className="md:text-[40px] max-md:text-xl max-md:mb-2 text-center"></h1>
          </div>
          <div className="container">
            <div className="flex justify-end relative max-md:flex-col">
              <div className="flex relative justify-center items-start border-8 border-[#f9deaf]">
                <div
                  className={clsx(
                    "relative md:top-[30px] md:right-[-30px] top-[25px] right-[-25px] shadow-lg md:hidden"
                  )}
                >
                  <Image
                    width={560}
                    height={750}
                    src="/images/stairs27.jpeg"
                    alt="лестница"
                    className="top-0 left-0 right-0 bottom-0"
                  />
                </div>
                <div
                  className={clsx(
                    "relative md:top-[30px] md:right-[-30px] top-[25px] right-[-25px] shadow-lg max-md:hidden"
                  )}
                >
                  <Image
                    width={560}
                    height={750}
                    src="/images/stairs34.jpeg"
                    alt="лестница"
                    className="top-0 left-0 right-0 bottom-0"
                  />
                </div>
              </div>
              <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
                <h1 className="md:text-[40px] max-md:text-xl max-md:mb-2">
                  Деревянные Лестницы в Тюмени: Изготовление и Установка Под
                  Ключ
                </h1>
                <p className="text-lg my-4">
                  Мечтаете о гармоничном интерьере, где каждая деталь дышит
                  теплом и уютом? Наша компания специализируется на изготовлении
                  деревянных лестниц под ключ, создавая конструкции, которые
                  подчеркнут стиль вашего дома и прослужат десятилетия.
                </p>
                <h3 className="text-xl mb-4">Почему выбирают дерево?</h3>
                <ul className="list-disc pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
                  <li>
                    <p>
                      Экологичность : Натуральный материал, безопасный для
                      здоровья и идеально вписывающийся в интерьеры от классики
                      до современного минимализма.
                    </p>
                  </li>
                  <li>
                    <p>
                      Прочность : Сосна, дуб, ясень или лиственница — каждая
                      порода обладает уникальными свойствами, гарантирующими
                      долговечность.
                    </p>
                  </li>
                  <li>
                    <p>
                      Уникальный дизайн : Форма винтовой деревянной лестницы ,
                      строгие линии маршевых моделей или компактные решения для
                      дачи — мы предложим вариант, который идеально впишется в
                      ваше пространство.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
