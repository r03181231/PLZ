import { useMutation, useQueryClient } from "react-query";

const useSetMutation = <TypeData>(
  fc: (variable: any) => Promise<TypeData>,
  setInvalidate: string
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<TypeData, unknown, any, unknown>(fc, {
    onSuccess: () => {
      queryClient.invalidateQueries(setInvalidate);
    },
    onError: () => {
      console.error("오류가 발생했습니다.");
    },
  });

  return [mutation];
};

export default useSetMutation;
