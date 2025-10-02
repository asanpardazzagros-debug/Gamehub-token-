import { useState } from "react";

export default function WalletConnect({ onConnect }) {
  const [address, setAddress] = useState("");

  const connect = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAddress(accounts[0]);
      onConnect(accounts[0]);
    } else {
      alert("MetaMask نصب نشده");
    }
  };

  return (
    <div className="text-center my-4">
      <button onClick={connect} className="bg-purple-600 text-white px-4 py-2 rounded">
        اتصال کیف پول
      </button>
      {address && <p className="mt-2 text-green-500">✅ آدرس: {address}</p>}
    </div>
  );
}