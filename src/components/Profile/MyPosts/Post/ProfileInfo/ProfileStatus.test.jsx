import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
  });

  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("status from props state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("SUBSCRIBE TO BASIC");
  });
});

test("status", () => {
  let mocKCallBack = jest.fn();
  const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateStatus = {mocKCallBack} />  );
  const instance = component.getInstance();
  instance.deactivateEditMode();
  expect(mocKCallBack.mock.calls.length).toBe(1);
});