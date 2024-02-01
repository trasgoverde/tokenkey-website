const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY, {

    network: {
  
      rpcUrl: "<https://rpc-mumbai.maticvigil.com/>",
  
      chainId: 80001,
  
    },
  
  })
  
  
  const web3 = new Web3((magic as any).rpcProvider)