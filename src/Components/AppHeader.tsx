import {Header, Text,MediaQuery, Burger,useMantineTheme } from '@mantine/core';
import React from 'react';


type Props = {
    height: number,
    p: string,
    setOpened: React.Dispatch<React.SetStateAction<any>>, 
    opened: boolean
}

const AppHeader: React.FC<Props> = ({height, p, setOpened, opened}) => {
    const theme = useMantineTheme();
    
    return (
        <Header height={height} p={p}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
    );
};

export default AppHeader;
