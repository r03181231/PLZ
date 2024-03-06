export const formatDate = (deadLine: string) => {
  return new Date(deadLine).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
