import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { apiFlowersRepository } from "@/core/infraestructure/flowerApiRepository";
import { FlowerBuilder } from "../core/domain/builders/FlowerBuilder";

describe("Home page", () => {
  it("renders a heading", async () => {
    render(<Home />);

    const heading = await screen.findByRole("heading", {
      name: /Sweet petals/i,
    });

    expect(heading).toBeInTheDocument();
  }),
    it("Searchbox filters by name", async () => {
      jest
        .spyOn(apiFlowersRepository, "getAll")
        .mockResolvedValue([
          FlowerBuilder().build(),
          FlowerBuilder().withName("Rose").build(),
        ]);
      render(<Home />);

      const searchbar = await screen.findByRole("searchbox");
      fireEvent.change(searchbar, { target: { value: "rose" } });
      expect(await screen.findByAltText("Rose")).toBeInTheDocument();
      expect(screen.queryByAltText("irrelevantName")).not.toBeInTheDocument();
    }),
    it("Searchbox filters by binomialname", async () => {
      jest
        .spyOn(apiFlowersRepository, "getAll")
        .mockResolvedValue([
          FlowerBuilder().build(),
          FlowerBuilder().withName("Rose").withBinomialName("Blue").build(),
        ]);
      render(<Home />);

      const searchbar = await screen.findByRole("searchbox");
      fireEvent.change(searchbar, { target: { value: "blue" } });
      expect(await screen.findByAltText("Rose")).toBeInTheDocument();
      expect(screen.queryByAltText("irrelevantName")).not.toBeInTheDocument();
    });
});
