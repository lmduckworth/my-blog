export default function Header({ title }) {
  return (
    <h1 className="text-3xl lg:text-5xl dark:text-white text-orange-500 text-center mb-12">
        {title}
    </h1>
);
}