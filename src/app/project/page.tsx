import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex w-full justify-center items-center h-[calc(100vh-65px)] bg-white dark:bg-[#141417]">
      <Card className="max-w-full w-[800px] h-[500px] p-[30px]">
        <CardHeader className="flex gap-3 items-center">
          <p className="font-bold text-[24px] text-black dark:text-white">
            Создание нового проекта
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="overflow-hidden pb-[50px] h-full">
          <form className="flex flex-col gap-4 h-[300px]">
            <Input isRequired label="Имя проекта" type="text" />
            <Textarea
              isRequired
              label="Описание"
              type="text"
              disableAutosize
              disableAnimation
              classNames={{
                input: "resize-y min-h-[40px] max-h-[200px] h-[100px]",
              }}
            />
            <div className="flex gap-2 justify-end">
              <Button
                as={Link}
                href="/project/1"
                className="flex gap-[5px]"
                color="primary"
                showAnchorIcon
                variant="solid"
              >
                Создать
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </main>
  );
}
