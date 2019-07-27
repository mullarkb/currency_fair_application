import { shallowMount } from '@vue/test-utils'
import TranslationInfo from '@/components/TranslationInfo.vue'

describe('TranslationInfo.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TranslationInfo, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
