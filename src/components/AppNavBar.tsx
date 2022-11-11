// @ts-nocheck
import {Button, Navbar, Text} from '@mantine/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addFive } from '../redux/features/countSlice';
// import { full, odd, even, none } from '../redux/features/filterSlice';
import { full, islands, castles } from '../redux/features/gridSlice';


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

    // const showNone = () => {
    //     dispatch(none())
    // }
    
    // console.log(
    //     useSelector((store) => {
    //         //const {name} = store;
    //         console.log(store)
    //     })
    // )

    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
          <Button onClick={showFull}>All</Button>
          <Button onClick={showIslands}>Islands and Ireland</Button>
          <Button onClick={showCastles}>Castles and Churches</Button> 
        </Navbar>
    );
};

export default AppNavBar;
