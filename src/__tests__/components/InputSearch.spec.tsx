import Router from "next/router";
import { render, fireEvent } from "@testing-library/react";
import { InputSearch } from "../../components/InputSearch";

jest.mock("next/router", () => ({ push: jest.fn() }));

describe("InputSearch.tsx", () => {
  const setup = () => {
    const utils = render(<InputSearch />);
    const input = utils.getByPlaceholderText("Search") as HTMLInputElement;
    const span = utils.getByTestId("button-icon-search") as HTMLSpanElement;
    return {
      input,
      span,
      ...utils,
    };
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("It should keep a in front of the input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });

  it("should not fire search if not enter key", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    fireEvent.keyPress(input, { key: "a", keyCode: 65 });

    expect(Router.push).toBeCalledTimes(0);
  });
  it("should fire search when press enter key", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    fireEvent.keyPress(input, { key: "Enter", keyCode: 13 });

    expect(Router.push).toBeCalledTimes(1);
  });
  it("should redirect when search empty", () => {
    const { input } = setup();
    fireEvent.keyPress(input, { key: "Enter", keyCode: 13 });

    expect(Router.push).toHaveBeenCalledWith({ pathname: "/" });
  });
  it("should redirect when click in search icon", () => {
    const { span } = setup();
    fireEvent.click(span);

    expect(Router.push).toHaveBeenCalledWith({ pathname: "/" });
  });
});
