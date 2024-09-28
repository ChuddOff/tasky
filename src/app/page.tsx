import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full justify-center items-center">
      <Button className="w-[750px] h-[500px] bg-black p-[22px 31px]">
        <h2>Создать новый проект</h2>
      </Button>
    </main>
  );
}
