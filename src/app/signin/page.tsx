"use client";

import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";

export default function Home() {
  const [selected, setSelected] = useState<React.Key>("login");

  return (
    <main className="flex w-full justify-center items-center h-[calc(100vh-65px)] bg-white dark:bg-[#141417]">
      <Card className="max-w-full w-[340px] h-[450px]">
        <CardBody className="overflow-hidden ">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              cursor: "bg-white dark:bg-black",
            }}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" type="email" />
                <Input isRequired label="Пароль" type="password" />
                <p className="text-center text-small text-black dark:text-white">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Имя" type="text" />
                <Input isRequired label="Фамилия" type="text" />
                <Input isRequired label="Email" type="email" />
                <Input isRequired label="Пароль" type="password" />
                <p className="text-center text-small text-black dark:text-white">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </main>
  );
}
