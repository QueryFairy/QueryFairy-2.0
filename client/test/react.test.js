import React from "React";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

//import files testing
import NodeItem from "../components/NodeItem";
import NodeList from "../components/NodeList";
import Endpoint from "../components/Endpoint";
import Output from "../components/Output";
import { Experimental_CssVarsProvider } from "@mui/material";
import JSDOMEnvironment from "jest-environment-jsdom";

describe("testing NodeItem", () => {
  let testNodeItem;
  const setNode = jest.fn();
  const props = {
    node: "activity",
    setNode,
  };
  beforeEach(() => {
    testNodeItem = render(<NodeItem {...props} />);
  });
  test("node item renders to the screen with text", () => {
    expect(testNodeItem.getByText("activity")).toBeTruthy();
  });
  test("set node triggered on button click", () => {
    const button = testNodeItem.getByRole("button");
    fireEvent.click(button);
    expect(setNode).toHaveBeenCalled();
  });
});

describe("testing NodeList", () => {
  let testNodeList;
  const setNode = jest.fn();
  const props = {
    nodeList: ["jamie", "tyler", "fran", "arthur"],
  };
  beforeEach(() => {
    testNodeList = render(<NodeList {...props} />);
  });
  test("four elements being rendered to the screen", () => {
    expect(testNodeList.getAllByRole("listitem").length).toEqual(4);
  });
});

describe("testing Endpoint", () => {
  let testEndpoint;
  const changeEndpoint = jest.fn();
  const props = {
    endpoint: "",
  };
  beforeEach(() => {
    testEndpoint = render(<Endpoint {...props} />);
  });
});

// describe('testing Output', ()=>{
//   let testOutput
//   const props = {

//   }
//   beforeEach(()=>{
//     testOutput = render(<Output {...props}/>)
//   })
// })
