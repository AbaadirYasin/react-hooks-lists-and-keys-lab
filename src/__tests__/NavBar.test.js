import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("renders three <a> elements", () => {
  const { container } = render(<NavBar />);
  const links = container.querySelectorAll("a");

  expect(links).toHaveLength(3);

  // Check for unique key prop
  links.forEach((link, index) => {
    expect(link).toHaveAttribute("href", `#${link.textContent}`);
  });
});
