const FilterHeader = ({
  title,
  prefix = true,
}: {
  title: string;
  prefix?: boolean;
}) => {
  return (
    <h1 className="text-2xl tracking-wide mx-8">
      {prefix && "Best in"} {title}
    </h1>
  );
};

export default FilterHeader;
