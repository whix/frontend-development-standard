export interface AntdSemanticTokens {
  colorPrimary: string;
  radiusBase: number;
}

export interface AntdThemeConfig {
  token: {
    colorPrimary: string;
    borderRadius: number;
  };
}

export function toAntdTheme(tokens: AntdSemanticTokens): AntdThemeConfig {
  return {
    token: {
      colorPrimary: tokens.colorPrimary,
      borderRadius: tokens.radiusBase
    }
  };
}
