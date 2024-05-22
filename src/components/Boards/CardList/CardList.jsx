import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import { List } from './CardList.styled';

const CardList = ({ columnTitle, column }) => {
  const selectedPriority = useSelector(
    state => state.dashboards.selectedPriority
  );

  const filteredColumn =
    column.cards &&
    column.cards.filter(column => column.priority === selectedPriority);

  const columnLength = column.cards && column.cards.length;
  const fileteredColumnLength = filteredColumn && filteredColumn.length;

  const condition =
    selectedPriority === 'show all' ? columnLength : fileteredColumnLength;
  return (
    <>
      <List length={condition}>
        {' '}
        {selectedPriority === 'show all'
          ? column.cards &&
            column.cards.map(el => (
              <CardItem key={el._id} column={el} columnTitle={columnTitle} />
            ))
          : filteredColumn &&
            filteredColumn.map(el => (
              <CardItem key={el._id} column={el} columnTitle={columnTitle} />
            ))}
      </List>
    </>
  );
};
export default CardList;
