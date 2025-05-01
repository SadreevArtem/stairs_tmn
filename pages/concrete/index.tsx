import { AppHead } from "@/shared/components/AppHead";
import { InfoCards } from "@/shared/components/InfoCards";
import { Navigation } from "@/shared/components/Navigation/Navigation";
import clsx from "clsx";
import { Bitter } from "next/font/google";
import Image from "next/image";

const inter = Bitter({ subsets: ["latin"] });

export default function Second() {
  const MetaData = {
    title: "Бетонные Лестницы в загородный частный дом в Тюмени | МПК Русь",
    description:
      "Проектируем и изготавливаем бетонные лестницы в Тюмени: винтовые лестницы, лестницы с забежными ступенями и отделкой. Бетонные конструкции для дома — надёжность, качество и индивидуальный подход.",
    keywords: "Бетонные лестницы, лестницы на второй этаж",
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
                    src="/images/concrete.png"
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
                    src="/images/concrete.png"
                    alt="лестница"
                    className="top-0 left-0 right-0 bottom-0"
                  />
                </div>
              </div>
              <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
                <h1 className="md:text-[40px] max-md:text-xl max-md:mb-2">
                  Бетонные лестницы для дома в Тюмени
                </h1>
                <p className="text-lg my-4">
                  Мечтаете о лестнице, которая станет не просто элементом
                  интерьера, а символом надежности? Бетонные лестницы — это
                  идеальное сочетание прочности, долговечности и эстетики. Наша
                  компания профессионально занимается проектированием,
                  изготовлением и отделкой бетонных конструкций, создавая
                  лестницы, которые выдерживают десятилетия и подчеркивают стиль
                  вашего дома.
                </p>
                <h3 className="text-xl mb-4">Почему выбирают бетон?</h3>
                <ul className="list-disc pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
                  <li>
                    <p>
                      Невероятная прочность : Бетон устойчив к нагрузкам, влаге,
                      перепадам температур — идеален для частных домов,
                      коттеджей и даже коммерческих помещений.
                    </p>
                  </li>
                  <li>
                    <p>
                      Свобода дизайна : От плавных линий бетонной винтовой
                      лестницы до строгих маршевых конструкций с забежными
                      ступенями — реализуем любые архитектурные идеи.
                    </p>
                  </li>
                  <li>
                    <p>
                      Отделка на любой вкус : Бетон — это «холст» для
                      творчества.
                    </p>
                  </li>
                  <li>
                    <p>
                      От проектирования до финишной отделки — вы получаете
                      готовое решение без лишних забот.
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
