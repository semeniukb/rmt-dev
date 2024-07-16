export type ResultsCountProps = {
  numberOfJobItems: number;
};
export default function ResultsCount({ numberOfJobItems }: ResultsCountProps) {
  return (
    <p className="count">
      <span className="u-bold">{numberOfJobItems}</span> results
    </p>
  );
}
