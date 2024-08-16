import {ethers} from 'ethers';
import * as SecureStore from 'expo-secure-store';

export const createWalletFromSeedPhrase = async (seedPhrase: string) => {
  const wallet = ethers.Wallet.fromPhrase(seedPhrase);
  const walletData = {
    privateKey: wallet.privateKey,
    address: wallet.address,
  };
  await SecureStore.setItemAsync('privateKey', wallet.privateKey);
  await SecureStore.setItemAsync('address', wallet.address);
  return walletData;
};

export const createRandoWallet = async () => {
  const randomWallet = ethers.Wallet.createRandom();
  await SecureStore.setItemAsync('phase', randomWallet.mnemonic?.phrase as string);
  const walletData = {
    privateKey: randomWallet.privateKey,
    address: randomWallet.address,
  };
  await SecureStore.setItemAsync('privateKey', walletData.privateKey);
  await SecureStore.setItemAsync('address', walletData.address);
  return walletData;
};



