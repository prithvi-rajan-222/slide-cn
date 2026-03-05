"use client";

import registry from "@/registry.json";
import { useState } from "react";
import { RadialGradient } from "@/components/ui/slide-cn/backgrounds/gradients/radial";
import { cn } from "@/lib/utils";

type RegistryTheme = {
  name: string;
  title: string;
  type: string;
  cssVars: {
    theme?: Record<string, string>;
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
};

const themes = (registry.items as RegistryTheme[]).filter(
  (t) => t.type === "registry:theme"
);

export function ThemePicker() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [dark, setDark] = useState(false);

  if (themes.length === 0) return null;

  const modeVars = dark ? selectedTheme.cssVars.dark : selectedTheme.cssVars.light;
  const cssVars = { ...selectedTheme.cssVars.theme, ...modeVars } as React.CSSProperties;

  return (
    <div className="my-6 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setSelectedTheme(theme)}
            className={cn(
              "flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
              selectedTheme.name === theme.name
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-foreground hover:bg-muted"
            )}
          >
            <span
              className="inline-block h-3 w-3 rounded-full ring-1 ring-black/10"
              style={{
                background: dark
                  ? theme.cssVars.dark?.["--background"]
                  : theme.cssVars.light?.["--background"],
              }}
            />
            {theme.title}
          </button>
        ))}
        <button
          onClick={() => setDark(!dark)}
          className="ml-auto rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          {dark ? "Light mode" : "Dark mode"}
        </button>
      </div>

      <div className="relative h-72 overflow-hidden rounded-lg" style={cssVars}>
        <RadialGradient />
        <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
          <p
            className="text-2xl font-bold tracking-tight"
            style={{ color: modeVars?.["--foreground"] }}
          >
            {selectedTheme.title}
          </p>
          <p className="text-sm" style={{ color: modeVars?.["--muted-foreground"] }}>
            Gradient preview · {dark ? "dark" : "light"} mode
          </p>
        </div>
      </div>
    </div>
  );
}
