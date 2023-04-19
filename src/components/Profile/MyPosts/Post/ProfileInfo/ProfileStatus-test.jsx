import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
  });
});