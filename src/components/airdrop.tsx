import { useConnection, useWallet } from "@solana/wallet-adapter-react";

function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const sendAirdropToUser = () => {
    if (!wallet.publicKey) return;
    connection.requestAirdrop(wallet.publicKey, 1 * 10 ** 9);
  };

  return (
    <div>
      Hello, {wallet.publicKey?.toBase58()}
      <br />
      <input type="number" max={5} min={0.1} step={0.1} placeholder="amount" />
      <button onClick={sendAirdropToUser}>Request Airdrop</button>
    </div>
  );
}

export default Airdrop;
