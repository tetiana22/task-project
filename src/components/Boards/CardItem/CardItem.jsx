import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { IconDel, IconEdit } from 'components/Sidebar/BordItem/BordItem.styled';
import {
  ActiveIcon,
  BottomWrapper,
  CardWrapper,
  Deadline,
  DelayIcon,
  IconBell,
  IconsGroup,
  MoverWrapper,
  PopupItem,
  PopupText,
  PopupWrapper,
  Priority,
  Stats,
  Text,
  Title,
  TopWrapper,
  Div,
} from './CardItem.styled';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';

import {
  allCards,
  deleteCard,
  editCard,
} from '../../../redux/cards/cardsReducers';
import CardmovePopup from './Popitem';
import EditCardModal from 'components/Modals/EditCardModal/EditCardModal';

const CardItem = ({ item, columnTitle, columnId, boardId, cardId }) => {
  const [openCardModal, setOpenCardModal] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [delayPopup, setDelayPopup] = useState(false);
  const moveIconRef = useRef(null);
  const dispatch = useDispatch();
  const { title, _id, deadline, description, priority } = item;
  const delayOptions = [1, 3, 5, 7];
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const today = new Date();
  const parsedDate = new Date(deadline);
  const formatedDeadline = parsedDate.toLocaleString('en-GB', options);
  const expiredCard = today > parsedDate;

  const checkTextLength = text => {
    return text.length <= 80 ? text : text.slice(0, 80) + '...';
  };

  const handleOutsideClick = event => {
    if (!event.composedPath().includes(moveIconRef.current)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleIconMoveClick = () => setIsPopupOpen(!isPopupOpen);

  const handleDelayPopup = () => setDelayPopup(!delayPopup);

  const handleDeadline = (deadline, delay) => {
    const date = new Date(deadline);
    date.setDate(date.getDate() + delay);
    dispatch(
      editCard({ cardId: _id, title, description, priority, deadline: date })
    );
    setDelayPopup(false);
  };

  const handleOpen = () => setOpenCardModal(true);
  const handleClose = () => setOpenCardModal(false);

  const handleDelete = () => {
    dispatch(deleteCard(cardId));
    dispatch(allCards(boardId));
  };

  return (
    <>
      <CardWrapper $priority={priority} $expired={expiredCard}>
        <TopWrapper>
          <Title>{title}</Title>
          <Text>{checkTextLength(description)}</Text>
        </TopWrapper>
        <BottomWrapper>
          <Stats>
            <Priority $priority={priority}>{priority}</Priority>
            <Deadline>{formatedDeadline}</Deadline>
          </Stats>
          <IconsGroup>
            {today.toLocaleDateString('en-GB', options) ===
              formatedDeadline && (
              <Div>
                <IconBell aria-label="bell icon">
                  <use href={`${sprite}#icon-bell`} />
                </IconBell>
              </Div>
            )}
            {today.toLocaleDateString('en-GB', options) > formatedDeadline && (
              <DelayIcon onClick={handleDelayPopup} />
            )}
            <MoverWrapper>
              <ActiveIcon
                ref={moveIconRef}
                aria-label="move card icon"
                onClick={handleIconMoveClick}
              >
                <use href={`${sprite}#icon-arrow-circle-broken-right`} />
              </ActiveIcon>
              {delayPopup && (
                <PopupWrapper>
                  {delayOptions.map((item, index) => (
                    <PopupItem
                      onClick={() => handleDeadline(deadline, item)}
                      key={index}
                    >
                      <PopupText>
                        {item > 1 ? `${item} days delay` : `${item} day delay`}
                      </PopupText>
                    </PopupItem>
                  ))}
                </PopupWrapper>
              )}
              {isPopupOpen && (
                <CardmovePopup
                  card={item}
                  columnTitle={columnTitle}
                  columnId={columnId}
                  boardId={boardId}
                  title={title}
                />
              )}
              <IconEdit aria-label="edit icon" onClick={handleOpen}>
                <use href={`${sprite}#icon-pencil`} />
              </IconEdit>
              {openCardModal && (
                <EditCardModal
                  isOpen={openCardModal}
                  onClose={handleClose}
                  cardId={cardId}
                />
              )}
              <IconDel aria-label="delete icon" onClick={handleDelete}>
                <use href={`${sprite}#icon-trash`} />
              </IconDel>
            </MoverWrapper>
          </IconsGroup>
        </BottomWrapper>
      </CardWrapper>
    </>
  );
};

export default CardItem;
