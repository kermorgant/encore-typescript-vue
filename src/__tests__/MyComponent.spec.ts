import "jest";
import { mount } from "@vue/test-utils";
import MyComponent from "../my-component.vue";

describe("MyComponent.vue", () => {
  test("title renders correctly", () => {
    const wrapper = mount(MyComponent);

    expect(wrapper.is("h1")).toBe(true);
    expect(wrapper.text()).toBe("Hello World");
  });
});
