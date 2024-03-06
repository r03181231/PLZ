interface ButtonProps {
  name: string;
  onClick: () => void;
}
export const AllowButton = ({ name, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{name}</button>;
};

export default AllowButton;
