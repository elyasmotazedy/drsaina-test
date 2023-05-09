export const fetchShopProducts = async () => {
  try {
    const { data } = await api.get(`/products`);
    return data;
  } catch (err) {
    return null;
  }
};
