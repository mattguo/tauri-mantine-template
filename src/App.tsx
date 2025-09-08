import { AppShell, Container, Group, Stack, Text, Title } from '@mantine/core';
import { IconBrandReact, IconBrandVite } from '@tabler/icons-react';
import WelcomeSection from './components/WelcomeSection';

function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <IconBrandReact size={24} />
          <Title order={3}>Close AI Inspector</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="md">
          <Stack gap="xl">
            <div>
              <Title order={1} ta="center" mb="md">
                Welcome to Tauri + React + Mantine
              </Title>
              <Text c="dimmed" ta="center" size="lg">
                A modern desktop application built with Tauri, React, and
                Mantine UI
              </Text>
            </div>

            <Group justify="center" gap="xl" mb="xl">
              <Group gap="xs">
                <IconBrandReact size={32} color="var(--mantine-color-blue-6)" />
                <Text size="sm" fw={500}>
                  Tauri
                </Text>
              </Group>
              <Group gap="xs">
                <IconBrandReact size={32} color="var(--mantine-color-cyan-6)" />
                <Text size="sm" fw={500}>
                  React
                </Text>
              </Group>
              <Group gap="xs">
                <IconBrandVite
                  size={32}
                  color="var(--mantine-color-yellow-6)"
                />
                <Text size="sm" fw={500}>
                  Vite
                </Text>
              </Group>
            </Group>

            <WelcomeSection />
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
