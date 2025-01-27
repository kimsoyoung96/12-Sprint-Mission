export async function getProducts() {
  const res =
    await fetch(`https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite
`);
  const data = await res.json();

  // const limitedData = data.slice(0,4);

  console.log(data);
}
