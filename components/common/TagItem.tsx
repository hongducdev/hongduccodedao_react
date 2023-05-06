interface TagItemProps {
  children: React.ReactNode;
}

const TagItem = ({ children }: TagItemProps) => {
  return (
    <span className="bg-primary inline-block font-medium py-1 px-2 rounded-lg text-whiteSoft text-xs lg:text-base">
      {children}
    </span>
  );
};

export default TagItem;
