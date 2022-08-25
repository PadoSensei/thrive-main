import {Navbar, Text} from '@mantine/core';
import React from 'react';


type Props = {
    //width: number,
    //p: string,
    //setOpened: React.Dispatch<React.SetStateAction<any>>, 
    opened: boolean
}

const AppNavBar: React.FC<Props> = ({opened}) => {
    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
    );
};

export default AppNavBar;
