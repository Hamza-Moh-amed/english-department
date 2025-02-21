interface HeaderProps {
  title: string;
  author: string;
  description?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  author,
  description,
}) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600">By {author}</p>
        </div>
      </div>
    </header>
  );
};
