import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { userBearsStore } from '../../stores/bears/bears.store';

export const BearPage = () => {

  return (
    <>
      <h1>Bears Counter</h1>
      <p>Simple State managment Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PolarBears />
        <PandaBears />
        <Bears />
      </div>

    </>
  );
};


export const BlackBears = () => {

  const blackBears = userBearsStore((state) => state.blackBears);
  const increaseBlackBears = userBearsStore((state) => state.increaseBlackBears);

  return (
    <WhiteCard centered>
      <h2 className='mb-3'>Osos Negros</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBlackBears(1) }> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => increaseBlackBears(-1) }>-1</button>
      </div>
    </WhiteCard>
  )
}

export const PolarBears = () => {

  const polarBears = userBearsStore(state => state.polarBears)
  const increasePolarBears = userBearsStore(state => state.increasePolarBears)

  return (
    <WhiteCard centered>
      <h2 className='mb-3'>Polar Bears</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{polarBears}</span>
        <button onClick={() => increasePolarBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

export const PandaBears = () => {
  const pandaBears = userBearsStore(state => state.pandaBears)
  const increasePandaBears = userBearsStore(state => state.increasePandaBears)
  return (
    <WhiteCard centered>
      <h2 className='mb-3'>Osos Pandas</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePandaBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button onClick={() => increasePandaBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

const Bears = () => {
  const bears = userBearsStore(useShallow(state => state.bears))
  const doNothing = userBearsStore(state => state.doNothing)
  const addBear = userBearsStore(state => state.addBear)
  const clearBears = userBearsStore(state => state.clearBears)
  return (
    <WhiteCard centered>
      <h2 className='mb-3'>Osos</h2>
      <button className="mb-3" onClick={() => doNothing()}>Do Nothing</button>
      <button className="mb-3" onClick={() => addBear()}>Add Bear</button>
      <button onClick={() => clearBears()}>clear Bears</button>
      <pre>
        {JSON.stringify(bears, null, 2)}
      </pre>
    </WhiteCard>
  )
}