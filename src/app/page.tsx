import { Button, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex w-full justify-center items-center h-[calc(100vh-65px)] bg-white dark:bg-[#141417]">
      <div className="flex flex-col gap-[18px] w-[1000px] h-full justify-center items-start h-[calc(100vh-65px)] bg-white dark:bg-[#141417] ">
        <h1 className="font-medium text-[56px] text-black dark:text-white">
          Добро <br /> пожаловать <br /> в Tasky!
        </h1>
        <h2 className="font-normal text-[20px] leading-[141%] text-black dark:text-white">
          Почему именно мы?
        </h2>
        <div className="flex gap-[30px]">
          <div className="flex gap-[10px]">
            <div className="w-[18px] h-[18px] bg-[#2f44ff] rounded-full" />
            <h3 className="font-normal text-[20px] leading-[141%] text-black dark:text-white">
              Удобный интерфейс
            </h3>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-[18px] h-[18px] bg-[#2f44ff] rounded-full" />
            <h3 className="font-normal text-[20px] leading-[141%] text-black dark:text-white">
              Бытсрая навигация
            </h3>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-[18px] h-[18px] bg-[#2f44ff] rounded-full" />
            <h3 className="font-normal text-[20px] leading-[141%] text-black dark:text-white">
              Ничего лишнего
            </h3>
          </div>
        </div>
        <Button
          color="primary"
          size="lg"
          as={Link}
          href="/project/"
          className="flex gap-[5px]"
          showAnchorIcon
          variant="solid"
        >
          Попробовать
        </Button>
      </div>
    </main>
  );
}
