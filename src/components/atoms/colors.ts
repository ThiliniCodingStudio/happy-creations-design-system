/**
 * Happy Creations Design System - Color Tokens
 * Based on Material Design 3 Color System
 * 
 * This file contains the semantic color tokens that form the foundation
 * of our design system. All colors are organized by theme (light/dark)
 * and follow Material Design 3 naming conventions.
 */

export const tokens = {
  sys: {
    light: {
      // Primary Colors - Main brand color (Purple/Violet)
      primary: '#6750A4', // Used for high-emphasis buttons, active states, and key components
      onPrimary: '#FFFFFF', // Text and icons on primary color
      primaryContainer: '#EADDFF', // Standout fill color for key components
      onPrimaryContainer: '#21005D', // Text and icons on primary container

      // Secondary Colors - Less prominent than primary
      secondary: '#625B71', // Used for less prominent components like filter chips
      onSecondary: '#FFFFFF', // Text and icons on secondary color
      secondaryContainer: '#E8DEF8', // Tonal fill color for secondary components
      onSecondaryContainer: '#1D192B', // Text and icons on secondary container

      // Tertiary Colors - Contrasting accent color
      tertiary: '#7D5260', // Used to balance primary and secondary colors, or bring heightened attention
      onTertiary: '#FFFFFF', // Text and icons on tertiary color
      tertiaryContainer: '#FFD8E4', // Container color for tertiary components
      onTertiaryContainer: '#31111D', // Text and icons on tertiary container

      // Error Colors - Used for errors and destructive actions
      error: '#B3261E', // Error text, icons, and error states
      onError: '#FFFFFF', // Text and icons on error color
      errorContainer: '#F9DEDC', // Container color for error components
      onErrorContainer: '#410E0B', // Text and icons on error container

      // Surface Colors - Background colors for components
      surface: '#FFFBFE', // Default background for app surfaces
      onSurface: '#1C1B1F', // Text and icons on surface
      surfaceVariant: '#E7E0EC', // Alternative surface color for differentiation
      onSurfaceVariant: '#49454F', // Text and icons on surface variant

      // Surface Containers - Elevated surface backgrounds
      surfaceContainerLowest: '#FFFFFF', // Lowest elevation surface
      surfaceContainerLow: '#F7F2FA', // Low elevation surface (cards, dialogs)
      surfaceContainer: '#F3EDF7', // Default container surface
      surfaceContainerHigh: '#ECE6F0', // High elevation surface (app bars)
      surfaceContainerHighest: '#E6E0E9', // Highest elevation surface (FABs)

      // Outline Colors - Borders and dividers
      outline: '#79747E', // Important boundaries, such as text field outlines
      outlineVariant: '#CAC4D0', // Decorative elements, such as dividers

      // Inverse Colors - Used for high contrast against surface
      inverseSurface: '#313033', // Background for inverse components (snackbars)
      inverseOnSurface: '#F4EFF4', // Text on inverse surface
      inversePrimary: '#D0BCFF', // Primary color in inverse theme

      // Scrim - Overlay for modal surfaces
      scrim: '#000000', // Overlay color for modals and dialogs (with opacity)

      // Shadow - Elevation shadows
      shadow: '#000000', // Shadow color for elevated components (with opacity)
    },

    dark: {
      // Primary Colors - Main brand color (Purple/Violet)
      primary: '#D0BCFF', // Used for high-emphasis buttons, active states in dark mode
      onPrimary: '#381E72', // Text and icons on primary color
      primaryContainer: '#4F378B', // Standout fill color for key components
      onPrimaryContainer: '#EADDFF', // Text and icons on primary container

      // Secondary Colors - Less prominent than primary
      secondary: '#CCC2DC', // Used for less prominent components in dark mode
      onSecondary: '#332D41', // Text and icons on secondary color
      secondaryContainer: '#4A4458', // Tonal fill color for secondary components
      onSecondaryContainer: '#E8DEF8', // Text and icons on secondary container

      // Tertiary Colors - Contrasting accent color
      tertiary: '#EFB8C8', // Used to balance primary and secondary colors in dark mode
      onTertiary: '#492532', // Text and icons on tertiary color
      tertiaryContainer: '#633B48', // Container color for tertiary components
      onTertiaryContainer: '#FFD8E4', // Text and icons on tertiary container

      // Error Colors - Used for errors and destructive actions
      error: '#F2B8B5', // Error text, icons, and error states in dark mode
      onError: '#601410', // Text and icons on error color
      errorContainer: '#8C1D18', // Container color for error components
      onErrorContainer: '#F9DEDC', // Text and icons on error container

      // Surface Colors - Background colors for components
      surface: '#1C1B1F', // Default background for app surfaces in dark mode
      onSurface: '#E6E1E5', // Text and icons on surface
      surfaceVariant: '#49454F', // Alternative surface color for differentiation
      onSurfaceVariant: '#CAC4D0', // Text and icons on surface variant

      // Surface Containers - Elevated surface backgrounds
      surfaceContainerLowest: '#0F0D13', // Lowest elevation surface
      surfaceContainerLow: '#1D1B20', // Low elevation surface (cards, dialogs)
      surfaceContainer: '#211F26', // Default container surface
      surfaceContainerHigh: '#2B2930', // High elevation surface (app bars)
      surfaceContainerHighest: '#36343B', // Highest elevation surface (FABs)

      // Outline Colors - Borders and dividers
      outline: '#938F99', // Important boundaries, such as text field outlines
      outlineVariant: '#49454F', // Decorative elements, such as dividers

      // Inverse Colors - Used for high contrast against surface
      inverseSurface: '#E6E1E5', // Background for inverse components (snackbars)
      inverseOnSurface: '#313033', // Text on inverse surface
      inversePrimary: '#6750A4', // Primary color in inverse theme

      // Scrim - Overlay for modal surfaces
      scrim: '#000000', // Overlay color for modals and dialogs (with opacity)

      // Shadow - Elevation shadows
      shadow: '#000000', // Shadow color for elevated components (with opacity)
    },
  },

  // Reference Colors - Base palette colors
  ref: {
    palette: {
      // Primary Palette (Purple/Violet)
      primary0: '#000000',
      primary10: '#21005D',
      primary20: '#381E72',
      primary30: '#4F378B',
      primary40: '#6750A4',
      primary50: '#7F67BE',
      primary60: '#9A82DB',
      primary70: '#B69DF8',
      primary80: '#D0BCFF',
      primary90: '#EADDFF',
      primary95: '#F6EDFF',
      primary99: '#FFFBFE',
      primary100: '#FFFFFF',

      // Secondary Palette
      secondary0: '#000000',
      secondary10: '#1D192B',
      secondary20: '#332D41',
      secondary30: '#4A4458',
      secondary40: '#625B71',
      secondary50: '#7A7289',
      secondary60: '#958DA5',
      secondary70: '#B0A7C0',
      secondary80: '#CCC2DC',
      secondary90: '#E8DEF8',
      secondary95: '#F6EDFF',
      secondary99: '#FFFBFE',
      secondary100: '#FFFFFF',

      // Tertiary Palette
      tertiary0: '#000000',
      tertiary10: '#31111D',
      tertiary20: '#492532',
      tertiary30: '#633B48',
      tertiary40: '#7D5260',
      tertiary50: '#986977',
      tertiary60: '#B58392',
      tertiary70: '#D29DAC',
      tertiary80: '#EFB8C8',
      tertiary90: '#FFD8E4',
      tertiary95: '#FFECF1',
      tertiary99: '#FFFBFA',
      tertiary100: '#FFFFFF',

      // Neutral Palette
      neutral0: '#000000',
      neutral10: '#1C1B1F',
      neutral20: '#313033',
      neutral30: '#484649',
      neutral40: '#605D62',
      neutral50: '#787579',
      neutral60: '#939094',
      neutral70: '#AEAAAE',
      neutral80: '#C9C5CA',
      neutral90: '#E6E1E5',
      neutral95: '#F4EFF4',
      neutral99: '#FFFBFE',
      neutral100: '#FFFFFF',

      // Neutral Variant Palette
      neutralVariant0: '#000000',
      neutralVariant10: '#1D1A22',
      neutralVariant20: '#322F37',
      neutralVariant30: '#49454F',
      neutralVariant40: '#605D66',
      neutralVariant50: '#79747E',
      neutralVariant60: '#938F99',
      neutralVariant70: '#AEA9B4',
      neutralVariant80: '#CAC4D0',
      neutralVariant90: '#E7E0EC',
      neutralVariant95: '#F5EFF7',
      neutralVariant99: '#FFFBFE',
      neutralVariant100: '#FFFFFF',

      // Error Palette
      error0: '#000000',
      error10: '#410E0B',
      error20: '#601410',
      error30: '#8C1D18',
      error40: '#B3261E',
      error50: '#DC362E',
      error60: '#E46962',
      error70: '#EC928E',
      error80: '#F2B8B5',
      error90: '#F9DEDC',
      error95: '#FCEEEE',
      error99: '#FFFBF9',
      error100: '#FFFFFF',
    },
  },

  // Extended Colors - Additional semantic colors for specific use cases
  extended: {
    success: {
      light: '#2E7D32', // Success states, positive feedback
      onSuccess: '#FFFFFF',
      successContainer: '#C8E6C9',
      onSuccessContainer: '#1B5E20',
    },
    warning: {
      light: '#F57C00', // Warning states, cautionary feedback
      onWarning: '#FFFFFF',
      warningContainer: '#FFE0B2',
      onWarningContainer: '#E65100',
    },
    info: {
      light: '#0288D1', // Informational messages
      onInfo: '#FFFFFF',
      infoContainer: '#B3E5FC',
      onInfoContainer: '#01579B',
    },
  },
} as const;

// Type exports for TypeScript consumers
export type ColorTokens = typeof tokens;
export type SystemColors = typeof tokens.sys.light;
export type ReferenceColors = typeof tokens.ref.palette;
