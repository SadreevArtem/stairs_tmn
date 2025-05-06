import { AppHead } from "@/shared/components/AppHead";
import { InfoCards } from "@/shared/components/InfoCards";
import { Navigation } from "@/shared/components/Navigation/Navigation";
import clsx from "clsx";
import { Bitter } from "next/font/google";
import Image from "next/image";

const inter = Bitter({ subsets: ["latin"] });

export default function Econom() {
  const MetaData = {
    title:
      "Готовые Лестницы в Тюмени — Купить Бюджетные Лестницы для Дома и Дачи | МПК Русь",
    description:
      "Продаём готовые лестницы на второй этаж, винтовые лестницы и лестницы для дома в Тюмени. Бюджетные решения, расчёт лестниц, модели для самостоятельной сборки. Поможем выбрать и купить готовую лестницу.",
    keywords: "Готовые лестницы, лестницы на второй этаж",
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
                    src="/images/econom.jpeg"
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
                    src="/images/econom.jpeg"
                    alt="лестница"
                    className="top-0 left-0 right-0 bottom-0"
                  />
                </div>
              </div>
              <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
                <h1 className="md:text-[40px] max-md:text-xl max-md:mb-2">
                  Готовые лестницы для дома в Тюмени: продажа и расчёт
                </h1>
                <p className="text-lg my-4">
                  Мечтаете о стильной и надежной лестнице, но не готовы
                  переплачивать за индивидуальный проект? Наши готовые лестницы
                  для дома — это оптимальное сочетание цены, качества и скорости
                  установки. Выбирайте из множества проверенных моделей, которые
                  уже ждут вас на складе!
                </p>
                <h3 className="text-xl mb-4">
                  Почему выбирают готовые лестницы?
                </h3>
                <ul className="list-disc pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
                  <li>
                    <p>
                      Экономия времени и денег : Бюджетные лестницы для дома
                      доступны в наличии — не нужно ждать недели производства.
                    </p>
                  </li>
                  <li>
                    <p>
                      Простота монтажа : Многие модели созданы для
                      самостоятельной сборки — инструкция и крепеж в комплекте.
                    </p>
                  </li>
                  <li>
                    <p>
                      Универсальный дизайн : От компактных готовых винтовых
                      лестниц до маршевых конструкций — подойдут для любого
                      интерьера.
                    </p>
                  </li>
                  <li>
                    <p>Большой выбор : Более 50 моделей в наличии.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container lg:mt-8">
            <p className="text-lg my-4">
              Хотите купить готовую лестницу на второй этаж или получить
              консультацию по выбору? Оставьте заявку на сайте — и уже завтра
              ваша лестница может быть на пути к вам!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
