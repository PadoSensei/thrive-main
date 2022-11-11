import { SimpleGrid } from "@mantine/core";
import AppCard from "./AppCard";

// Simple 3 column layout
const AppGrid = ({ data }) => {
  return (
    <SimpleGrid cols={3} spacing={"sm"}>
      {data.map(card => (
      <AppCard 
        key={card.dataNumber} 
        images={card.images}
        title={card.title}
        altText={card.altText}
        badgeText={card.badgeText}
        buttonText={card.buttonText}
        dataNumber={card.dataNumber}
        blurbText={card.blurbText}
      />
      ))}
    </SimpleGrid>
  );
};

export default AppGrid;
