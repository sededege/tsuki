
import { FC, useEffect, useState } from 'react';
import { SendTransaction } from '../../components/SendTransaction';
import dynamic from "next/dynamic";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection } from "@solana/wallet-adapter-react";

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const BasicsView: FC = ({ }) => {
  const [count, setCount] = useState(1);
  const [entries, setEntries] = useState(1);
  const connection = useConnection();

  useEffect(() => {
    // Pick a random number for entries on the first render
    const initialEntries = Math.floor(Math.random() * 100) + 1;
    setEntries(initialEntries);

    // Increment the value by a random low value every second
    const interval = setInterval(() => {
      setEntries((prevEntries) => prevEntries + Math.floor(Math.random() * 10) + 1);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="md:hero mx-auto p-4 items-center">
      <div className="md:hero-content flex flex-col w-full">

        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Raffles
        </h1>
      <img className='w-[200px]' src='https://madlads.s3.us-west-2.amazonaws.com/images/476.png'/>
      <p className='text-purple-500 font-bold'>Mad Lads #4234</p>
      <p>Entries: {entries}/10000</p>
      <p className='text-gray-500'>      Your tickets: {count}
</p>
      <div className='flex gap-2 items-center justify-center'><img className='w-4 h-4' src='https://cryptologos.cc/logos/solana-sol-logo.png'/><p>0.01  {/* <span className='text-sky-300 font-semibold'>$SUKI</span>  */}{/* 20.000 */}</p></div>
        <SendTransaction setCount={setCount} count={count}/>

        <WalletMultiButton />
        <div className='flex items-center gap-2 font-semibold'>
          <p>powered by</p> <img className='w-14' src='https://pbs.twimg.com/profile_images/1726329813898575872/ctizitqY_400x400.jpg'/>
          <a href='https://twitter.com/TsukiSolana'>
          <img className='w-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png'/>
          </a>
        </div>
      </div>
    </div>
  );
};
