import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

//时间
export const dateFormatter = new Intl.DateTimeFormat(window.context.locale,{
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

//对twmerge 和 clsx 函数进行封装
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}