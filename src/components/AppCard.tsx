// import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
// import { Carousel } from '@mantine/carousel';

// type Props = {
//   dataNumber: number,
//   images: string[],
//   title: string,
//   altText: string,
//   blurbText: string, 
//   buttonText: string, 
//   badgeText: string
// }

// //export const PlaceWagerButton = (props: { game: Game; market: Market }) => {
// const AppCard: React.FC<Props> = ({ images, title, altText, blurbText, buttonText, badgeText }) => {
  
//   return (
//     <Card shadow="sm" p="lg" radius="md" withBorder>
//       <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators height={200}>
//         {images.map(image => {
//           return (
//           <Carousel.Slide>
//             <Image
//               src={image}
//               height={240}
//               alt={altText}
//             />
//           </Carousel.Slide>
//         )})}
//     </Carousel>

//       <Group position="apart" mt="md" mb="xs">
//         <Text weight={500}>{title}</Text>
//         <Badge color="pink" variant="light">
//           {badgeText}
//         </Badge>
//       </Group>

//       <Text size="sm" color="dimmed">
//         {blurbText}
//       </Text>

//       <Button variant="light" color="blue" fullWidth mt="md" radius="md">
//         {buttonText}
//       </Button>
//     </Card>
//   );
// }

// export default AppCard

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
// type Props = {
//   dataNumber: number,
//   images: string[],
//   title: string,
//   altText: string,
//   blurbText: string,
//   buttonText: string,
//   badgeText: string
// }
const AppCard = (props: {
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
        {props.images.map((image) => {
          return (
            <Carousel.Slide>
              <Image src={image} height={240} alt={props.altText} />
            </Carousel.Slide>
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