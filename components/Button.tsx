import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "gold" | "ghost-dark";

const BASE =
  "inline-flex items-center gap-2.5 font-body font-semibold text-[15px] py-3.5 px-7 rounded-full border border-transparent cursor-pointer whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform,translate] duration-250 [&_.arrow]:inline-block [&_.arrow]:transition-transform [&_.arrow]:duration-250 hover:[&_.arrow]:translate-x-1";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  gold: "bg-gold text-navy-3 shadow-[0_10px_30px_-12px_rgba(184,150,90,0.7)] hover:bg-gold-soft hover:-translate-y-0.5",
  "ghost-dark": "bg-transparent text-navy border-[rgba(27,36,54,0.25)] hover:border-gold-deep hover:text-gold-deep",
};

/** For components that can't render <Button> directly (e.g. SubmitButton needs useFormStatus). */
export const buttonClassName = (variant: ButtonVariant = "gold", className?: string) =>
  cn(BASE, VARIANT_CLASSES[variant], className);

type CommonProps = {
  variant?: ButtonVariant;
  /** Appends a translating "→" span — the site's standard hover-arrow affordance. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className"> & { href: string };

type ButtonElProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined };

type Props = LinkProps | ButtonElProps;

const Button = ({ variant = "gold", arrow = false, className, children, ...props }: Props) => {
  const cls = cn(BASE, VARIANT_CLASSES[variant], className);
  const content = (
    <>
      {children}
      {arrow && <span className="arrow">→</span>}
    </>
  );

  if (props.href !== undefined) {
    const { href, ...linkProps } = props as LinkProps;
    return (
      <Link href={href} className={cls} {...linkProps}>
        {content}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonElProps;
  return (
    <button type="button" className={cls} {...buttonProps}>
      {content}
    </button>
  );
};

export default Button;
