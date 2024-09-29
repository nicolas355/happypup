import { useParams } from "react-router-dom";

export const useFindItemByName = (data: any[], key: string) => {
  const { name } = useParams();

  const item = data.find((item) =>
    item[key].trim().toLowerCase() === name?.toLowerCase().trim()
  );

  return item;
};
