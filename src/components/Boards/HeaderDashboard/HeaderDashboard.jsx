import { Title } from './HeaderDasboards.styled';
const HeaderDashboard = ({ board }) => {
  return (
    <div>
      <Title>{board.title}</Title>
    </div>
  );
};

export default HeaderDashboard;
