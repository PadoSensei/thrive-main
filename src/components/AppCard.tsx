
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const AppCard = (props: {
  dataNumber: number,
  images: string[];
  title: string;
  altText: string;
  blurbText: string;
  buttonText: string;
  badgeText: string;
}) => {
  return (
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators height={200}>
          {props.images.map((image, index) => {
            return (
              <div key={index}>
                <Carousel.Slide>
                  <Image  src={image} height={240} alt={props.altText} />
                </Carousel.Slide>
              </div>
            );
          })}
        </Carousel>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{props.title}</Text>
          <Badge color="pink" variant="light">
            {props.badgeText}
          </Badge>
        </Group>
        <Text size="sm" color="dimmed">
          {props.blurbText}
        </Text>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          {props.buttonText}
        </Button>
      </Card>
  );
};
export default AppCard;