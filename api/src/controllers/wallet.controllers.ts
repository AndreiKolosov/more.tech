import axios from 'axios';

const BASE_WALLET_URL = 'https://hackathon.lsp.team/hk';

export const createWallet = async () => {
  try {
    const { data } = await axios.post(`${BASE_WALLET_URL}/v1/wallets/new`, {
      headers: {
        "Content-Type": "application/json",
        "Connection": "keep-alive",
        "Accept": "*/*"
      },
      data: {}
    });

    return data;
  } catch(err: any) {
    throw new Error(err.message);
  }
}
