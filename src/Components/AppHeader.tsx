import {Header, Text,MediaQuery, Burger,useMantineTheme, Group } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';


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
            <Group>
                <Text>Application Navbar Header</Text>
                <Text to="/" component={Link} variant="link">Home</Text>
                <Text to="/about" component={Link} variant="link">About</Text>
                <Text to="/contact" component={Link} variant="link">Contact</Text>
            </Group>
          </div>
        </Header>
    );
};

export default AppHeader;
