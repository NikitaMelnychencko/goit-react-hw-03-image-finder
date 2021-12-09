import s from './Button.module.scss';

const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" className={s.Button} onClick={() => onClick()}>
        Load more
      </button>
    </>
  );
};

export default Button;
