const connectWallet = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      console.log("✅ Wallet connected:", accounts[0]);
    } catch (err) {
      console.error("❌ Wallet connection failed:", err);
    }
  } else {
    alert("لطفاً MetaMask نصب کنید");
  }
};