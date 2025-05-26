import clsx from 'clsx'

export default function Badge({ children, variant, color, ...rest }) {
  const badgeClassName = clsx(`badge ${color}`, {
    pill: variant === 'pill',
    color,
  })

  return <div className={badgeClassName}>{children}</div>
}
