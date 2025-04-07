interface Props {
  children?: React.ReactNode
}

export default function Botao({ children }: Props) {
  return (
    <button>
      {children}
    </button>
  );
}
