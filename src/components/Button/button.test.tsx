import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'
const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.large,
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps} >Nice</Button>) // 渲染一个button组件
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument() // 是否存在
    expect(element.tagName).toEqual('BUTTON') // 值是否相等
    expect(element).toHaveClass('btn btn-default') // 是否拥有这些class
    expect(element.disabled).toBeFalsy() // 应该是为假
    fireEvent.click(element) // 触发click事件
    expect(defaultProps.onClick).toHaveBeenCalled() // 事件应该被调用
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps} >Nice</Button>) 
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com" >Link</Button>) 
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("A")
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps} >Nice</Button>) 
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy() // 应该是为真
    fireEvent.click(element) // 触发click事件
    expect(disabledProps.onClick).not.toHaveBeenCalled() // 应该没有被调用
  })
})
