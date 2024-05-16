import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allColumns } from '../../../redux/cards/cardsReducers';
import { ListWrapper } from './ColumnList.styled';
import ColumnItem from '../ColumnItem/ColumnItem';

const ColumnList = ({ boardId }) => {
  const columns = useSelector(state => state.dashboards.columns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allColumns(boardId));
  }, [dispatch, boardId]);
  console.log(columns);
  return (
    <div>
      <ListWrapper>
        {columns.map(column => (
          <ColumnItem key={column._id} column={column} columnId={column._id} />
        ))}
        ,
      </ListWrapper>
    </div>
  );
};
export default ColumnList;
