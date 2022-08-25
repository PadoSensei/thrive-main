import { AppShell, useMantineTheme } from "@mantine/core";
import AppHeader from "./Components/AppHeader";
import AppNavBar from "./Components/AppNavBar";
import { useState } from "react";
import Main from "./Components/Main";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <AppHeader height={70} p="md" setOpened={setOpened} opened={opened} />
      }
      navbar={<AppNavBar opened={opened} />}
    >
      <Main />
    </AppShell>
  );
}
