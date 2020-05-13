import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueRouter from 'vue-router'

import SignUp from '@/components/SignUp.vue'

const factory = (values = {}) => {
  return shallowMount(SignUp, {
    data () {
      return {
        ...values
      }
    },
    stubs: {
      RouterLink: RouterLinkStub
    }
  })
}

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('SignUp.vue', () => {
  it('renders a welcome message', () => {
    const wrapper = factory()

    expect(wrapper.find('h1').text()).toEqual("Welcome, please Sign Up")
  })
})
