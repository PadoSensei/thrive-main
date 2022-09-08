import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

type Props = {
  dataNumber: number,
  image: string,
  title: string,
  altText: string,
  blurbText: string, 
  buttonText: string, 
  badgeText: string
}

// Refactor: add image carousel
const AppCard: React.FC<Props> = ({ image, title, altText, blurbText, buttonText, badgeText }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={image}
          height={160}
          alt={altText}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          {badgeText}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {blurbText}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        {buttonText}
      </Button>
    </Card>
  );
}

export default AppCard