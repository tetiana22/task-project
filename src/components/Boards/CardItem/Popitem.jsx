import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCards, moveCard } from '../../../redux/cards/cardsReducers';
import {
  PopupWrapper,
  PopupItem,
  PopupText,
  PopupIcon,
  PopTextWrap,
} from './CardItem.styled';
import sprite from '../../../images/icons-sprite.svg';
import { toast } from 'react-toastify';

const CardmovePopup = ({ card, columnTitle, columnId, boardId }) => {
  const dispatch = useDispatch();
  const columns = useSelector(state => state.dashboards.columns || []);
  const cardId = card._id;
  const cards = useSelector(state => state.dashboards.cards || []);
  const isLoading = useSelector(state => state.dashboards.isLoading || false);

  const handleMoveCard = newColumnId => {
    const currColumnCardsLgth = cards.filter(
      card => card.columnId === columnId
    ).length;
    const index = currColumnCardsLgth;

    dispatch(moveCard({ cardId, columnId: newColumnId, index }));
    dispatch(allCards(boardId));
  };

  const columnMap = columns.reduce((map, column) => {
    map[column.title] = column._id;
    return map;
  }, {});

  useEffect(() => {
    if (isLoading) {
      toast.info('Moving card...');
    } else {
      toast.dismiss();
    }
  }, [isLoading]);

  return (
    <PopupWrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        Object.keys(columnMap).map((title, idx) =>
          title !== columnTitle ? (
            <PopupItem
              onClick={() => handleMoveCard(columnMap[title])}
              key={idx}
            >
              <PopTextWrap>
                <PopupText>{title}</PopupText>
                <PopupIcon>
                  <use href={`${sprite}#icon-arrow-circle-broken-right`} />
                </PopupIcon>
              </PopTextWrap>
            </PopupItem>
          ) : null
        )
      )}
    </PopupWrapper>
  );
};

export default CardmovePopup;
