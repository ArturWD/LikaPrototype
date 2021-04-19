import * as React from 'react';

export interface CustomThemeOptions {
    colors?: {
        backgroundMain: React.CSSProperties['color'];
        backgroundSecondary: React.CSSProperties['color'];
        backgroundTertiary: React.CSSProperties['color'];
        textMain: React.CSSProperties['color'];
        textMainPale: React.CSSProperties['color'];
        textSecondary: React.CSSProperties['color'];
        textSecondaryPale: React.CSSProperties['color'];
        textTertiary: React.CSSProperties['color'];
        accent: React.CSSProperties['color'];
        accentPale: React.CSSProperties['color'];
        danger: React.CSSProperties['color'];
        dangerPale: React.CSSProperties['color'];
        success: React.CSSProperties['color'];
        successPale: React.CSSProperties['color'];
    };
}
