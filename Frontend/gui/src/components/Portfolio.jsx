import { Box, Flex, Icon, SegmentedControl, Text } from "gestalt";
import React,{useState,useEffect} from 'react';
import "E:/homy/Portfolio/Portfolio/Frontend/gui/node_modules/gestalt/dist/gestalt.css"
import All from './porfolio_material/all'
import '../css/portfolio.css';

function Portfolio(props) { 

    const [itemIndex, setItemIndex] = useState(0);

    const items = [
    'Web Development',
    'Mobiel Development',
    'Machine learning',
    'DataBase',
    ];

    // const [all,setAll] = useState('')
    // const [web,setWeb] = useState('')
    // const [mobile,setMobile] = useState('')
    // const [ml,setMl] = useState('')
    // const [db,setDb] = useState('')

    
    const content = [
        <All/>,
        <All/>,
        <All/>,
        <All/>,   
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
                        {content[itemIndex]}
                    </Box>
                </Flex>
        </div>
    </section>
    );
}
export default Portfolio;