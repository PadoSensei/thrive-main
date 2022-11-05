// @ts-nocheck
import {Button, Navbar, Text} from '@mantine/core';
import React from 'react';
import { useSelector } from 'react-redux';


type Props = {
    opened: boolean
}

// Refactor: Add Filter buttons; [All, ...categories]

const AppNavBar: React.FC<Props> = ({opened}) => {
    
    console.log(
        useSelector((store) => {
            console.log(store);
        })
    )

    //const count  = useSelector((state) => state.count)
    //console.log(count)
    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
          <Button>Increase</Button>
          <Button>Decrease</Button>
          {/* <Text>Count: {count}</Text> */}
        </Navbar>
    );
};

export default AppNavBar;
