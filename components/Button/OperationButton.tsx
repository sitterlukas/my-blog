import { ACTIONS } from '../../pages/calculator';

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      className='p-4 border'
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
}
