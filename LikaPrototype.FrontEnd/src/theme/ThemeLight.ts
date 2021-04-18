import * as palette from './palette';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const Light: ThemeOptions = {
    spacing: 4,
    breakpoints: {
        values: {
            xs: 400,
            sm: 600,
            md: 760,
            lg: 960,
            xl: 1280,
        },
    },
    palette: {
        primary: {
            main: palette.carrot,
        },
    },
    typography: {
        fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        htmlFontSize: 16,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontSize: 40,
            fontWeight: 500,
            color: palette.blueDarkGray,
        },
        h2: {
            fontSize: 28,
            fontWeight: 500,
            color: palette.blueDarkGray,
        },
        h3: {
            fontSize: 20,
            fontWeight: 500,
            color: palette.blueDarkGray,
        },
        body1: {
            fontSize: 16,
            fontWeight: 400,
            color: palette.blueDarkGray,
        },
        body2: {
            fontSize: 14,
            fontWeight: 500,
            color: palette.blueDarkGray,
        },
        caption: {
            fontSize: 12,
            fontWeight: 500,
            color: palette.blueDarkGray,
        },
    },
    colors: {
        backgroundMain: palette.blueWhite,
        backgroundSecondary: palette.white,
        textMain: palette.blueDarkGray,
        textSecondary: palette.blueGrey,
        textTertiary: palette.lighterGrey,
        accent: palette.carrot,
        danger: palette.carrotDark,
        success: palette.carrotLeaf,
    },
};
