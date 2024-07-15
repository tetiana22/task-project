import { Title } from './HeaderDasboards.styled';

const HeaderDashboard = ({ board }) => {
  if (!board) return null;

  return (
    <div>
      <Title>{board.title}</Title>
    </div>
  );
};

export default HeaderDashboard;
