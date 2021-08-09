import { shallowMount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent.vue', () => {
  // variable 'component' contains 'wrapper.vm', after the component has been shallow mounted, using vue-test-utils
  it('should set the result to 1 and be ready', async () => {
    const component = shallowMount(MyComponent).vm as any

    // Given
    const promise = Promise.resolve();

    // When
    await component.myMethod(promise);
    await expect(promise).resolves.toBeUndefined();

    // Then
    expect(component.result).toBe(1);
    expect(component.ready).toBe(true);
  });

  it('should set the result to 2 and be ready', async () => {
    const component = shallowMount(MyComponent).vm as any

    // Given
    const promise = Promise.reject();

    // When
    await component.myMethod(promise);
    await expect(promise).rejects.toBeUndefined();

    // Then
    expect(component.result).toBe(2);
    expect(component.ready).toBe(true);
  });
})
