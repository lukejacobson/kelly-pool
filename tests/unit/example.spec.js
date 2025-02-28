import { shallowMount } from "@vue/test-utils";
import BasePage from "@/components/BasePage.vue";

describe("BasePage.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(BasePage, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
