// @ts-nocheck
import {Button, Navbar, Text} from '@mantine/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { full, islands, castles, houses, none } from '../redux/features/gridSlice';


type Props = {
    opened: boolean
}

// Refactor: Add Filter buttons; [All, ...categories]

const AppNavBar: React.FC<Props> = ({opened}) => {
    const dispatch = useDispatch();

    const showFull = () => {
        dispatch(full())
    }

    const showIslands = () => {
        dispatch(islands())
    }

    const showCastles = () => {
        dispatch(castles())
    }

    const showHouses = () => {
        dispatch(houses())
    }

    const showNone = () => {
        dispatch(none())
    }
    

    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
          <Button onClick={showFull}>All</Button>
          <Button onClick={showIslands}>Islands and Ireland</Button>
          <Button onClick={showCastles}>Castles and Churches</Button> 
          <Button onClick={showHouses}>Stairs and Houses</Button> 
          <Button onClick={showNone}>None</Button> 
        </Navbar>
    );
};

export default AppNavBar;
