import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'

const factory = (values = {}) => {
  return shallowMount(Home, {
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

describe('Home.vue', () => {
  // it('renders props.whatever when passed', () => {
  //   const whatever = 'new message'
  //   const wrapper = shallowMount(Home, {
  //     propsData: { whatever }
  //   })
  //   expect(wrapper.text()).toMatch(whatever)
  // })
  it('renders a welcome message', () => {
    const wrapper = factory()

    expect(wrapper.find('h1').text()).toEqual("Welcome, please Sign In or Sign Up")
  })
  it('renders the correct links', () => {
    const wrapper = factory()

    expect(wrapper.contains('.navbar-nav')).toBe(true)
    expect(wrapper.find('.nav-item').exists()).toBe(true)
  })
})
