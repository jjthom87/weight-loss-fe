import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

const factory = (values = {}) => {
  return shallowMount(Home, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe('Home.vue', () => {
  it('renders props.whatever when passed', () => {
    const whatever = 'new message'
    const wrapper = shallowMount(Home, {
      propsData: { whatever }
    })
    expect(wrapper.text()).toMatch(whatever)
  })
  it('renders a welcome message', () => {
    const wrapper = factory()

    expect(wrapper.find('h1').text()).toEqual("Welcome, please Sign In or Sign Out")
  })
})
