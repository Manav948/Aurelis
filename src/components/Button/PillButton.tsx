import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type AnchorProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  type?: never;
};

type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

export type PillButtonProps = AnchorProps | NativeButtonProps;

export function PillButton(props: PillButtonProps) {
  const { children, className = '', ...rest } = props;
  const classes = `pill-button ${className}`.trim();

  if ('href' in props && typeof props.href === 'string') {
    return (
      <a className={classes} href={props.href} {...rest as AnchorHTMLAttributes<HTMLAnchorElement>}>
        <span className="pill-button__icon" aria-hidden="true">
          <ArrowUpRight size={17} strokeWidth={2.1} />
        </span>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...rest as ButtonHTMLAttributes<HTMLButtonElement>}>
      <span className="pill-button__icon" aria-hidden="true">
        <ArrowUpRight size={17} strokeWidth={2.1} />
      </span>
      <span>{children}</span>
    </button>
  );
}
