import { AppHead } from "@/shared/components/AppHead";
import { InfoCards } from "@/shared/components/InfoCards";
import { Navigation } from "@/shared/components/Navigation/Navigation";
import clsx from "clsx";
import { Bitter } from "next/font/google";
import Image from "next/image";

const inter = Bitter({ subsets: ["latin"] });

export default function Second() {
  const MetaData = {
    title:
      "Лестницы на Второй Этаж в загородный частный дом в Тюмени | МПК Русь",
    description:
      "Изготавливаем лестницы на второй этаж в Тюмени для частных домов. Заказать или купить лестницу под ключ с установкой. Индивидуальные проекты, качественные материалы и доступные цены.",
    keywords: "лестницы, лестницы на второй этаж",
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
                    src="/images/stairs36.jpeg"
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
                    src="/images/stairs36.jpeg"
                    alt="лестница"
                    className="top-0 left-0 right-0 bottom-0"
                  />
                </div>
              </div>
              <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
                <h1 className="md:text-[40px] max-md:text-xl max-md:mb-2">
                  Лестницы на второй этаж для частного дома в Тюмени
                </h1>
                <p className="text-lg my-4">
                  Планируете обустройство второго этажа в вашем доме? Стильная и
                  надежная лестница — это не просто функциональный элемент, но и
                  центральный акцент интерьера. Наша компания специализируется
                  на производстве и установке лестниц на второй этаж, создавая
                  конструкции, которые сочетают безопасность, эргономику и
                  эстетику.
                </p>
                <h3 className="text-xl mb-4">
                  Почему стоит заказать лестницу в частный дом у нас?
                </h3>
                <ul className="list-disc pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
                  <li>
                    <p>
                      Индивидуальный подход : Мы разрабатываем проекты любой
                      сложности, учитывая площадь, стиль интерьера и ваши
                      пожелания.
                    </p>
                  </li>
                  <li>
                    <p>
                      Качество материалов : Используем только проверенные
                      материалы — массив дерева, металл, стекло или их
                      комбинации.
                    </p>
                  </li>
                  <li>
                    <p>
                      Профессиональный монтаж : Опытные мастера гарантируют
                      точную установку, соблюдая сроки и стандарты безопасности.
                    </p>
                  </li>
                  <li>
                    <p>
                      Доступные цены : Прямое производство без посредников
                      позволяет предлагать лестницы на второй этаж по выгодной
                      стоимости.
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
