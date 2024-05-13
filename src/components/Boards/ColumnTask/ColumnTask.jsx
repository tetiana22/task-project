import { useDispatch } from 'react-redux';
import { useState } from 'react';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';
import { deleteColumn } from '../../../redux/cards/cardsReducers';
// import Card from 'components/Cards/Card';
import EditColumnModal from '../../Modals/EditColumnModal/EditColumnModal';

import {
  Wrapper,
  Header,
  IconWrapper,
  Icon,
  Content,
  Title,
  ContentWrapper,
} from './ColumnTask.styled';

// import { useSelector } from 'react-redux';

export const ColumnTask = ({ item }) => {
  const dispatch = useDispatch();

  const [openColumnModal, setOpenColumnModal] = useState(false);
  //   const [openCardModal, setOpenCardModal] = useState(false);

  // const selectedPriority = useSelector(
  //   state => state.dashboards.selectedPriority
  // );

  const handleOpenColumnModal = () => setOpenColumnModal(true);
  const handleCloseColumnModal = () => setOpenColumnModal(false);

  //   const handleOpenCardModal = () => setOpenCardModal(true);
  //   const handleCloseCardModal = () => setOpenCardModal(false);

  // const filteredColumn =
  //   item.cards && item.cards.filter(item => item.priority === selectedPriority);

  // const columnLength = item.cards && item.cards.length;
  // const fileteredColumnLength = filteredColumn && filteredColumn.length;

  // const condition =
  //   selectedPriority === 'show all' ? columnLength : fileteredColumnLength;

  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <Header>
            <Title>{item.title}</Title>

            <IconWrapper>
              <Icon onClick={handleOpenColumnModal}>
                <use href={sprite + '#icon-pencil'} />
              </Icon>

              <Icon onClick={() => dispatch(deleteColumn(item._id))}>
                <use href={sprite + '#icon-trash'} />
              </Icon>
            </IconWrapper>
          </Header>

          {/* <TaskList length={condition}>
            {selectedPriority === 'show all'
              ? item.cards &&
                item.cards.map(el => (
                  <Card key={el._id} item={el} columnName={item.title} />
                ))
              : filteredColumn &&
                filteredColumn.map(el => (
                  <Card key={el._id} item={el} columnName={item.title} />
                ))}
          </TaskList> */}
        </Content>
        {/* 
        <ButtonPlus onClick={handleOpenCardModal} /> */}
      </ContentWrapper>

      {openColumnModal && (
        <EditColumnModal
          title={item.title}
          columnId={item._id}
          closeModal={handleCloseColumnModal}
        />
      )}

      {/* <AddCardModal columnId={item._id} closeModal={handleCloseCardModal} /> */}
    </Wrapper>
  );
};
