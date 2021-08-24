import "./styles.css";
import bookmarks from "./bookmarks";

export default function App() {
  return (
    <div className="App">
      {bookmarks.map((category) => {
        return (
          <nav>
            <h1>{category.title}</h1>
            {category.links.map((link) => {
              return <a href={link.href}>{link.label}</a>;
            })}
          </nav>
        );
      })}
    </div>
  );
}
