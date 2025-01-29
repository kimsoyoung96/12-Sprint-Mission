const BASE_URL = "https://panda-market-api.vercel.app";

// 베스트/전체 상품 리스트
// export async function getProductData(params = {}) {
//   const query = new URLSearchParams(params).toString();
//   const response = await fetch(`${BASE_URL}/products?${query}`);

//   if (!response.ok) {
//     throw new Error("상품을 불러오는 데 실패했습니다.");
//   }
//   const body = await response.json();
//   return body;
// }

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
