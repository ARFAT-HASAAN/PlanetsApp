import { colors } from '../Theme/colors'
import { typography } from '../Theme/Typography'

const BASE = {
  fontSize: 16,
  fontFamily: typography.primary,
  color: colors.white,
}
const BASE_BOLD = {
  fontSize: 16,
  fontFamily: typography.primaryBold,
  color: colors.white,
}
const BOLD = {
  fontFamily: typography.bold,
  color: colors.white,
}

export const presets = {
  default: BASE,
  bold: BASE_BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },

  h3: {
    ...BASE_BOLD,
    fontSize: 26,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 16,
  },
  small: {
    ...BASE_BOLD,
    fontSize: 14,
  },
}
