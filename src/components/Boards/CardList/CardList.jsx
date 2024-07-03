import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import { List } from './CardList.styled';
import { allCards } from '../../../redux/cards/cardsReducers';

const CardList = ({ columnId, columnTitle, boardId }) => {
  const dispatch = useDispatch();

  const selectedPriority = useSelector(
    state => state.dashboards.selectedPriority
  );
  const cards = useSelector(state => state.dashboards.cards);

  useEffect(() => {
    dispatch(allCards(boardId));
  }, [dispatch, boardId]);

  const cardsInColumn = cards.filter(card => card.columnId === columnId);

  const filteredCards =
    selectedPriority === 'show all'
      ? cardsInColumn
      : cardsInColumn.filter(card => card.priority === selectedPriority);

  return (
    <List length={filteredCards.$length}>
      {filteredCards.map(card => (
        <CardItem
          key={card._id}
          cardId={card._id}
          item={card}
          columnTitle={columnTitle}
          columnId={columnId}
          boardId={boardId}
        />
      ))}
    </List>
  );
};

export default CardList;
