import React from 'react'
import classNames from "classnames";

export enum ButtonSize {
  large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

// ButtonProps结合了BaseButtonProps和React本身的Attributes
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
// Partial是把所有属性变成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { 
    btnType,
    className, // 用户自定义的classname
    disabled,
    size,
    children,
    href,
    ...restProps
   } = props
   // btn, btn-lg, btn-primary
   const classes = classNames('btn', className, {
     [`btn-${btnType}`]: btnType,
     [`btn-${size}`]: size,
     'disabled': (btnType === ButtonType.Link) && disabled
   })

   if (btnType === ButtonType.Link && href) {
     return (
       <a 
        className={classes}
        href={href}
        {...restProps}
       >
         {children}
       </a>
     )
   } else {
     return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
     )
   }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button;
