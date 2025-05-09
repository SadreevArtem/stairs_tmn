import { AppHead } from "@/shared/components/AppHead";
import { InfoCards } from "@/shared/components/InfoCards";
import { Navigation } from "@/shared/components/Navigation/Navigation";
import clsx from "clsx";
import { Bitter } from "next/font/google";
import Image from "next/image";

const inter = Bitter({ subsets: ["latin"] });

export default function Fence() {
  const MetaData = {
    title:
      "Ограждения для Лестниц в Тюмени — Балясины и Перила для Дома | МПК Русь",
    description:
      "Изготавливаем и устанавливаем ограждения для лестниц в Тюмени: балясины, перила, ограждение лестниц в частных домах. Надёжность, стильный дизайн и профессиональный монтаж.",
    keywords: "ограждения лестницы, лестницы на второй этаж",
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
                    src="/images/fence.jpeg"
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
                    src="/images/fence.jpeg"
                    alt="лестница"
                    className="top-0 left-0 right-0 bottom-0"
                  />
                </div>
              </div>
              <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
                <h1 className="md:text-[40px] max-md:text-xl max-md:mb-2">
                  Ограждения и балясины для лестниц в Тюмени
                </h1>
                <p className="text-lg my-4">
                  Лестница в вашем доме — это не только функциональный элемент,
                  но и часть интерьера, которая требует особого внимания к
                  безопасности и эстетике. Ограждение лестницы от нашей компании
                  станет идеальным завершением конструкции, подчеркивая ее
                  дизайн и защищая вашу семью от случайных падений.
                </p>
                <h3 className="text-xl mb-4">
                  Почему важно выбрать качественное ограждение?
                </h3>
                <ul className="list-disc pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
                  <li>
                    <p>
                      Безопасность : Надежные перила и балясины минимизируют
                      риски, особенно если в доме есть дети или пожилые люди.
                    </p>
                  </li>
                  <li>
                    <p>
                      Эстетика : Ограждение задает тон всему интерьеру — от
                      классики с резными деревянными элементами до хай-тека с
                      металлом и стеклом.
                    </p>
                  </li>
                  <li>
                    <p>
                      Долговечность : Мы используем материалы, устойчивые к
                      износу, влаге и перепадам температур.
                    </p>
                  </li>
                  <li>
                    <p>
                      Изготовление ограждений на заказ : Любой дизайн, размер и
                      конфигурация под вашу лестницу.
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
