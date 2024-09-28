"use client";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Chip,
  Tab,
  Tabs,
  ModalContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
  Input,
} from "@nextui-org/react";
import { Key, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function Home({ params: { id } }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = useState<Key | null | undefined>("tasks");

  return (
    <main className="flex w-full justify-center h-[calc(100vh-65px)] bg-white dark:bg-[#141417] py-[70px]">
      <Tabs
        aria-label="Options"
        isVertical={true}
        selectedKey={selected}
        onSelectionChange={setSelected}
        classNames={{
          tabList: "w-[290px] h-full",
          panel: "w-[950px] h-full",
          cursor: "bg-white dark:bg-black",
          tab: "justify-start h-[50px] ",
          tabContent: "h-full flex items-center",
          base: "h-full",
        }}
      >
        <Tab key="tasks" title="⭐ Задачи">
          <Card className="h-full">
            <CardBody>
              <div className="flex gap-[10px] p-[10px] h-full">
                <div className="flex flex-col gap-[30px] w-[55%] h-full overflow-y-scroll p-[10px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      className="flex flex-col gap-[10px] p-[10px] border-[1px] border-black dark:border-white rounded-[15px]"
                      key={i}
                    >
                      <div className="flex gap-[20px]">
                        <div className="flex flex-col">
                          <p className="font-medium text-[20px] text-black dark:text-white">
                            Название задачи
                          </p>
                          <p className="font-medium text-[16px] text-black dark:text-white">
                            Описание задачи: Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className="flex flex-col w-full justify-end">
                          <p className="font-medium text-[16px] text-black dark:text-white">
                            Срок выполнения: _
                          </p>
                          <p className="font-medium text-[16px] text-black dark:text-white">
                            Создатель
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[10px]">
                        <Chip>Frontend</Chip>
                        <Chip>Fix</Chip>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col w-[45%] p-[10px] justify-between">
                  <div className="flex gap-[20px] flex-col w-full">
                    <p className="font-medium text-[20px] text-black dark:text-white">
                      Название задачи
                    </p>
                    <p className="font-medium text-[16px] text-black dark:text-white">
                      Описание задачи: Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </p>
                    <p className="font-medium text-[16px] text-black dark:text-white">
                      Срок выполнения: _
                    </p>
                    <p className="font-medium text-[16px] text-black dark:text-white">
                      Создатель
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <ButtonGroup>
                      <Button color="primary" size="lg" className="w-[160px]">
                        Редактировать
                      </Button>
                      <Button size="lg" className="w-[160px]">
                        Завершить
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="important" title="🏠 Важное">
          <Card className="h-full">
            <CardBody></CardBody>
          </Card>
        </Tab>
        <Tab key="active" title="⚡ Активные">
          <Card className="h-full">
            <CardBody></CardBody>
          </Card>
        </Tab>
        <Tab key="completed" title="🚫 Завершённые">
          <Card className="h-full">
            <CardBody></CardBody>
          </Card>
        </Tab>
        <Tab key="members" title="👥 Участники">
          <Card className="h-full">
            <CardBody>
              <div className="w-full h-full flex items-center justify-center gap-[20px] flex-col">
                <p className="font-medium text-[20px] text-black dark:text-white">
                  Для этого проекта нет участников
                </p>

                <div className="flex gap-[10px]">
                  <p className="font-medium text-[20px] text-black dark:text-white">
                    Пригласите их по ссылке в
                  </p>
                  <Link
                    size="lg"
                    onPress={() => setSelected("settings")}
                    className="font-medium text-[20px] cursor-pointer "
                  >
                    настройках
                  </Link>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="settings" title="⚙️ Настройки">
          <Card className="h-full">
            <CardBody>
              <div className="w-full h-full flex gap-[20px] flex-col p-[10px]">
                <div className="flex gap-[10px]">
                  <p className="font-medium text-[20px] text-black dark:text-white">
                    Пригласительная ссылка:
                  </p>
                  <p className="font-medium text-[20px] text-black dark:text-white select-all">
                    Ссылка
                  </p>
                </div>

                <p className="font-medium text-[20px] text-black dark:text-white">
                  Опасная зона:
                </p>
                <Button
                  color="warning"
                  size="lg"
                  className="w-[160px]"
                  onClick={onOpen}
                >
                  Удалить проект
                </Button>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-medium text-black dark:text-white">
                Подтверждение действия
              </ModalHeader>
              <ModalBody>
                <p className="font-medium text-[16px] text-black dark:text-white">
                  Вы действительно хотите удалить этот проект?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Закрыть
                </Button>
                <Button color="warning" onPress={onClose}>
                  Удалить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-medium text-black dark:text-white">
                Подтверждение действия
              </ModalHeader>
              <ModalBody>
                <p className="font-medium text-[16px] text-black dark:text-white">
                  Вы действительно хотите завершить эту задачу?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Закрыть
                </Button>
                <Button color="warning" onPress={onClose}>
                  завершить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
