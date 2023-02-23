import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Detail from "@/pages/detail/[id]";
import { apiFlowersRepository } from "@/core/infraestructure/flowerApiRepository";
import { FlowerBuilder } from "@/core/domain/builders/FlowerBuilder";

describe("Details page", () => {
  it("Shows the details and image of the flower", async () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    const mockRouter = {
      query: { id: "irrelevant" },
    };
    useRouter.mockReturnValue(mockRouter);
    jest
      .spyOn(apiFlowersRepository, "getById")
      .mockResolvedValue(FlowerBuilder().build());
    render(<Detail />);
    expect(await screen.findByAltText("irrelevantName")).toBeInTheDocument();
    expect(
      await screen.findByText("irrelevantBinomialName")
    ).toBeInTheDocument();
  });
  it("Returnss to previous page once the button is clicked", async () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    const mockRouter = {
      query: { id: "irrelevant" },
      back: jest.fn(),
    };
    useRouter.mockReturnValue(mockRouter);
    jest
      .spyOn(apiFlowersRepository, "getById")
      .mockResolvedValue(FlowerBuilder().build());
    render(<Detail />);
    const returnButton = await screen.findByRole("button");
    fireEvent.click(returnButton);
    expect(mockRouter.back).toBeCalled();
  });
});
