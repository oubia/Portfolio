import { Box, Flex, Icon, SegmentedControl, Text } from "gestalt";
import React from 'react';
import "E:/homy/Portfolio/Portfolio/Frontend/gui/node_modules/gestalt/dist/gestalt.css"
import All from './porfolio_material/all'
import About from '../components/about'
import Services from '../components/services'
import '../css/portfolio.css';

function Portfolio() { 

    const [itemIndex, setItemIndex] = React.useState(0);

    const items = [
    'News',
    'You',
    'Messages',
    <Icon
        icon="pin"
        accessibilityLabel="Pin"
        color="red"
    />,
    ];

    const content = [
        <All/>,
        <About/>,
        <Services/>,
    ];

    return (
    <section className='section-about' id='about'>
        <div className='container'>
            <div className='Aboutrow'>
                <div className='section-title'>
                    <h2>Portfolio</h2>
                </div>
            </div>
                <Flex direction="column" gap={{ column: 2, row: 0 }} 
                >
                    <SegmentedControl
                        items={items}
                        selectedItemIndex={itemIndex}
                        onChange={({ activeIndex }) => setItemIndex(activeIndex)}
                        
                    />
                    <Box borderStyle="shadow" padding={6} rounding={2} >
                        <Text >{content[itemIndex]}</Text>
                    </Box>
                </Flex>
        </div>
    </section>
    );
}
export default Portfolio;