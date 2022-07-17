import { ACTIONS } from '../../pages/calculator';

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      className='p-4 border'
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
