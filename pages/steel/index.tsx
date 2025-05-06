import { AppHead } from "@/shared/components/AppHead";
import { Navigation } from "@/shared/components/Navigation/Navigation";
import clsx from "clsx";
import { Bitter } from "next/font/google";
import Image from "next/image";

const inter = Bitter({ subsets: ["latin"] });

export default function Second() {
  const MetaData = {
    title:
      "Металлические Лестницы в Тюмени — Изготовление Каркасов и Перил на Заказ | МПК Русь",
    description:
      "Изготавливаем металлические лестницы и каркасы в Тюмени: межэтажные и винтовые модели, лестницы на второй этаж, металлические перила. Работаем на заказ по доступным ценам. Прочные конструкции и качественный монтаж.",
    keywords: "Металлические лестницы, лестницы на второй этаж",
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
                    src="/images/stairs11.JPG"
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
                    src="/images/stairs11.JPG"
                    alt="лестница"
                    className="top-0 left-0 right-0 bottom-0"
                  />
                </div>
              </div>
              <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
                <h1 className="md:text-[40px] max-md:text-xl max-md:mb-2">
                  Изготовление винтовых металлических лестниц на второй этаж в
                  Тюмени
                </h1>
                <p className="text-lg my-4">
                  Ищете долговечное решение для межэтажного перехода?
                  Металлические лестницы — это идеальный выбор для тех, кто
                  ценит прочность, современный дизайн и безупречное качество.
                  Наша компания специализируется на изготовлении металлических
                  лестниц под ключ, превращая ваши идеи в конструкции, которые
                  выдерживают время и впечатляют эстетикой.
                </p>
                <h3 className="text-xl mb-4">Почему металлические лестницы?</h3>
                <ul className="list-disc pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
                  <li>
                    <p>
                      Прочность и долговечность : Металл не боится нагрузок,
                      перепадов температур и влажности — идеален для частных
                      домов, дач и даже коммерческих помещений.
                    </p>
                  </li>
                  <li>
                    <p>
                      Универсальный дизайн : От лаконичных винтовых лестниц из
                      металла до строгих маршевых моделей — легко впишутся в
                      интерьеры от хай-тек до индустриального стиля.
                    </p>
                  </li>
                  <li>
                    <p>
                      Безопасность : Жесткий каркас лестницы из металла
                      обеспечивает устойчивость, а антикоррозийная обработка
                      защищает от износа.
                    </p>
                  </li>
                  <li>
                    <p>
                      Доступные цены : Прямое производство без посредников
                      позволяет предлагать металлические лестницы на второй этаж
                      по выгодной стоимости.
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
