import { useMutation, useQueryClient } from "react-query";

//<TypeData>는 함수 useMutation의 제네릭 타입 매개변수.
// Promise의 반환 유형을 지정하거나, 함수의 파라미터 유형을 정의.
const useSetMutation = <TData>(fc: (variable: any) => Promise<TData>, queryName: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<TData, unknown, any, unknown>(fc, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryName);
    },
    onError: () => {
      console.error("오류가 발생했습니다.");
    },
  });

  return [mutation];
};

export default useSetMutation;
