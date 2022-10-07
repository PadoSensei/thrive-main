import { SimpleGrid } from "@mantine/core";
import AppCard from "./AppCard";

// Simple 3 column layout
const AppGrid = ({ data }) => {
  return (
    <SimpleGrid cols={3} spacing={"sm"}>
      {data.map(
        ({
          dataNumber,
          images,
          title,
          badgeText,
          altText,
          blurbText,
          buttonText,
        }) => {
          return (
            <AppCard
              key={dataNumber}
              images={images}
              title={title}
              altText={altText}
              badgeText={badgeText}
              blurbText={blurbText}
              buttonText={buttonText}
              // dataNumber={dataNumber}
            />
          );
        }
      )}
    </SimpleGrid>
  );
};

export default AppGrid;
