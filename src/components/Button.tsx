import React from 'react'
type Props = {
    btnText: string;
};

const Button = ({btnText}: Props) => {
  return (
    <button className='bg-fuchsia-900 rounded-full px-3 py-1 text-[10px] text-white hover:bg-fuchsia-700'>{btnText}</button>
  )
}

export default Button