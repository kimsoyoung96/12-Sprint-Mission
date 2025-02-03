const BASE_URL = "https://panda-market-api.vercel.app";

export const getProductData = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw new Error(`에러코드 : ${response.status}`);
    }
    const subject = await response.json();
    return subject;
  } catch ({ message }) {
    return message;
  }
};
