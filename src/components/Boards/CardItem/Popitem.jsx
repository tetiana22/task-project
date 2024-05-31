import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveCard } from '../../../redux/cards/cardsReducers';
import {
  PopupWrapper,
  PopupItem,
  PopupText,
  PopupIcon,
  PopTextWrap,
} from './CardItem.styled';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';

const CardmovePopup = ({ card, columnTitle }) => {
  const dispatch = useDispatch();
  const cardId = card._id;
  const cards = useSelector(state => state.dashboards.cards);
  const columns = useSelector(state => state.dashboards.columns);

  // Create a dynamic column map based on the current columns
  const columnMap = columns.reduce((map, column) => {
    map[column.title] = column._id;
    return map;
  }, {});

  const handleMoveCard = newColumnId => {
    const currColumnCards = cards.filter(card => card.columnId === newColumnId);
    const index = currColumnCards.length;
    dispatch(moveCard({ cardId, columnId: newColumnId, index }));
  };

  return (
    <PopupWrapper>
      {Object.keys(columnMap).map(
        (title, idx) =>
          title !== columnTitle && (
            <PopupItem
              onClick={() => handleMoveCard(columnMap[title])}
              key={idx}
            >
              <PopTextWrap>
                <PopupText>Move to {title} </PopupText>
                <PopupIcon>
                  <use href={`${sprite}#icon-arrow-circle-broken-right`} />
                </PopupIcon>
              </PopTextWrap>
            </PopupItem>
          )
      )}
    </PopupWrapper>
  );
};

export default CardmovePopup;
