import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./Dropdown";

const onChange = jest.fn();
const defaultProps = {
  labelText: "Further Actions",
  placeholder: "Pick One",
  options: [
    { value: "MARK_AS_SUBMITTED", label: "Mark as Submitted" },
    { value: "MARK_AS_SUCCESSFUL", label: "Mark as Successful" },
    { value: "MARK_AS_COPY", label: "Mark as Copy" },
    { value: "ARCHIVE", label: "Archive" },
  ],
  value: "",
  onChange,
};

describe("Dropdown", () => {
  it("renders", () => {
    render(<Dropdown {...defaultProps} placeholder={"banana"} />);
    expect(screen.getByText("banana")).toBeInTheDocument();
  });

  it("displays the list of options in dropdown menu", () => {
    render(<Dropdown {...defaultProps} placeholder={"banana"} />);
    const button = screen.getByText("banana");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(screen.getByText("Archive")).not.toBeVisible();
    userEvent.click(button);
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("Archive")).toBeVisible();
  });

  it("displays a selected option", () => {
    render(
      <Dropdown {...defaultProps} value={"ARCHIVE"} placeholder={"banana"} />
    );
    expect(screen.getAllByText("Archive")).toHaveLength(2);
  });

  it("calls onChange on select", () => {
    render(<Dropdown {...defaultProps} placeholder={"banana"} />);
    const button = screen.getByText("banana");
    userEvent.click(button);
    userEvent.click(screen.getByText("Archive"));
    expect(onChange).toHaveBeenCalled();
  });
});
