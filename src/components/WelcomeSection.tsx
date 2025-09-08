import {
  Alert,
  Button,
  Card,
  Group,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconInfoCircle, IconSend } from "@tabler/icons-react";
import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";

interface WelcomeSectionProps {
  className?: string;
}

function WelcomeSection({ className = "" }: WelcomeSectionProps) {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function greet() {
    if (!name.trim()) return;

    setLoading(true);
    try {
      // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
      const message = await invoke("greet", { name });
      setGreetMsg(message as string);
    } catch {
      setGreetMsg("Error: Failed to greet");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={className}>
      <Stack gap="md">
        <Alert
          icon={<IconInfoCircle size={16} />}
          title="Try the Tauri Command"
          color="blue"
        >
          This form demonstrates communication between the frontend and the Rust
          backend using Tauri commands.
        </Alert>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <Stack gap="md">
            <TextInput
              label="Your Name"
              placeholder="Enter a name..."
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
              disabled={loading}
            />

            <Group justify="flex-end">
              <Button
                type="submit"
                leftSection={<IconSend size={16} />}
                loading={loading}
                disabled={!name.trim()}
              >
                {loading ? "Greeting..." : "Greet"}
              </Button>
            </Group>
          </Stack>
        </form>

        {greetMsg && (
          <Alert
            icon={<IconCheck size={16} />}
            title="Response from Rust"
            color="green"
            variant="light"
          >
            <Text size="sm">{greetMsg}</Text>
          </Alert>
        )}
      </Stack>
    </Card>
  );
}

export default WelcomeSection;
