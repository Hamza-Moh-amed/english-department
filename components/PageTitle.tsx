interface PageTitleProps {
  title: string;
  author?: string;
  description?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  author,
  description,
}) => {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {author && <p className="text-gray-600">By {author}</p>}
      {description && <p className="mt-2 text-gray-500">{description}</p>}
    </div>
  );
};
