export const sortByDate = (
  // March 5, 2021
  a: { frontmatter: Frontmatter },
  b: { frontmatter: Frontmatter }
): number => {
  return (
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
};

interface Frontmatter {
  // March 5, 2021
  date: string;
}