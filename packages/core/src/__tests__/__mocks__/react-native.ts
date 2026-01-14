export const useColorScheme = () => 'light' as 'light' | 'dark' | null | undefined

export const Platform = {
  OS: 'ios' as const,
  select: (obj: any) => obj.ios || obj.default,
}

export const StyleSheet = {
  create: <T extends Record<string, any>>(styles: T): T => styles,
}
