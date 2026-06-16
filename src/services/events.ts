export const getEvents = async (
  page: number,
  search: string,
  filters: Filters
) => {
  const response = await fetch(...);

  return response.json();
};