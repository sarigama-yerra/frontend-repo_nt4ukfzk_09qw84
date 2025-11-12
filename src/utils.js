export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const tokens = {
  colors: {
    baseDark: '#0F1724',
    baseLight: '#F8FAFC',
    accentWarm: '#FF7A59',
    accentCool: '#4FD1C5',
  },
}
