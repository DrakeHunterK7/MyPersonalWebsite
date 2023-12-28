// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { AppShell, Group, Text} from '@mantine/core';

export default function App() {

  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <AppShell
      header={{ height: { base: 60, md: 70, lg: 100 } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 270 }}
          >
          Anas Peerzada
        </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        There will be content here soon
      </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
  
}