  
import React from 'react';
import Card from './Card'
import './List.css';

function List(props) {

    return (
    <section class="List">
        <header class="List-header">
          <h2>{props.header}</h2>
        </header>
        <div class="List-cards">
          {props.cards.map((card) =>
            <Card 
              key={card.id}
              title={card.title}
              id={card.id}
              content={card.content}
              onDeleteItem={props.onDeleteItem}
            />
          )}
            <button type="button" class="List-add-button">
              + Add Random Card
            </button>
        </div>
      </section>
    )
    }

export default List;