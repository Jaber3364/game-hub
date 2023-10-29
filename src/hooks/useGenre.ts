import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const {data: ganres} = useGenres();
  return ganres?.results.find(
    (g: {id: number | undefined}) => g.id === id
  );
}

export default useGenre;