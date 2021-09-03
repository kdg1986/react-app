import { useState, useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

const style = {
    width: 700,    
};
export const Container = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'Write a cool JS library',
            },
            {
                id: 2,
                text: 'Make it generic enough',
            },
            {
                id: 3,
                text: 'Write README',
            },
            {
                id: 4,
                text: 'Create some examples',
            },
            {
                id: 5,
                text: 'Spam in Twitter and IRC to promote ',
            },            
            {
                id: 7,
                text: 'PROFIT',
            },
        ]);
        const moveCard = useCallback((dragIndex, hoverIndex) => {                  
            const dragCard = cards[dragIndex];
            setCards(update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }));
        }, [cards]);
        const renderCard = (card, index) => {
            return (<Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard}/>);
        };
        return (
            <DndProvider backend={HTML5Backend}>  
                <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            </DndProvider>);
    }
};


