---
name: slide-cn-themes
description: >
  Use this skill when the user asks to "generate a theme", "create a colour scheme",
  "add a theme", "change a theme", or provides background and primary colors for their
  Slide-CN project. Trigger any time the user provides oklch color values and wants
  a complete theme generated.
version: 0.3.0
---

# Slide-CN Theme Skill

Generate a complete Slide-CN color scheme for both light and dark mode given 4 input colors.

---

## Inputs Required

Ask the user for these 4 values if not already provided:

```
bg1      oklch(...)   first background/gradient color
bg2      oklch(...)   second background/gradient color
bg3      oklch(...)   third background/gradient color
primary  oklch(...)   primary brand/action color
```

---

## Derivation Rules

### Surfaces
Derived from bg1's hue and chroma. In dark mode step lightness UP, in light mode step DOWN.

```
dark mode:
--card:     bg1 lightness + 0.06
--popover:  bg1 lightness + 0.10
--muted:    bg1 lightness + 0.04

light mode:
--card:     bg1 lightness - 0.06
--popover:  bg1 lightness - 0.10
--muted:    bg1 lightness - 0.04
```

Keep the same hue and chroma as bg1 for all three.

### Secondary
Same hue as primary, chroma halved, lightness pulled toward the background.
```
dark mode:  lightness 0.25, chroma primary_chroma / 2, same hue
light mode: lightness 0.70, chroma primary_chroma / 2, same hue
```

### Accent
Use bg3 directly. It's the most distinct of the three backgrounds.

### Ring
Same as primary.

### Destructive
Always fixed: `oklch(0.55 0.22 25)`

---

## Constants (never change per mode)

### Dark mode constants
```json
"--foreground":             "oklch(0.95 0 0)",
"--card-foreground":        "oklch(0.95 0 0)",
"--popover-foreground":     "oklch(0.95 0 0)",
"--primary-foreground":     "oklch(0.13 0 0)",
"--secondary-foreground":   "oklch(0.95 0 0 / 80%)",
"--muted-foreground":       "oklch(0.95 0 0 / 60%)",
"--accent-foreground":      "oklch(0.95 0 0)",
"--destructive-foreground": "oklch(0.95 0 0)",
"--border":                 "oklch(0.95 0 0 / 10%)",
"--input":                  "oklch(0.95 0 0 / 10%)"
```

### Light mode constants
```json
"--foreground":             "oklch(0.13 0 0)",
"--card-foreground":        "oklch(0.13 0 0)",
"--popover-foreground":     "oklch(0.13 0 0)",
"--primary-foreground":     "oklch(0.95 0 0)",
"--secondary-foreground":   "oklch(0.13 0 0 / 80%)",
"--muted-foreground":       "oklch(0.13 0 0 / 60%)",
"--accent-foreground":      "oklch(0.13 0 0)",
"--destructive-foreground": "oklch(0.95 0 0)",
"--border":                 "oklch(0.13 0 0 / 10%)",
"--input":                  "oklch(0.13 0 0 / 10%)"
```

### Theme constants (both modes)
```json
"--slide-grad-angle":    "135deg",
"--slide-glow-opacity":  "0.35",
"--slide-noise-opacity": "0.04"
```

---

## Output Format

Always output the complete JSON block in this exact structure, ready to paste into a registry item:

```json
"cssVars": {
  "theme": {
    "--slide-grad-angle":    "135deg",
    "--slide-glow-opacity":  "0.35",
    "--slide-noise-opacity": "0.04"
  },
  "light": {
    "--background":             "...",
    "--background-2":           "...",
    "--background-3":           "...",
    "--foreground":             "oklch(0.13 0 0)",
    "--card":                   "...",
    "--card-foreground":        "oklch(0.13 0 0)",
    "--popover":                "...",
    "--popover-foreground":     "oklch(0.13 0 0)",
    "--primary":                "...",
    "--primary-foreground":     "oklch(0.95 0 0)",
    "--secondary":              "...",
    "--secondary-foreground":   "oklch(0.13 0 0 / 80%)",
    "--muted":                  "...",
    "--muted-foreground":       "oklch(0.13 0 0 / 60%)",
    "--accent":                 "...",
    "--accent-foreground":      "oklch(0.13 0 0)",
    "--destructive":            "oklch(0.55 0.22 25)",
    "--destructive-foreground": "oklch(0.95 0 0)",
    "--border":                 "oklch(0.13 0 0 / 10%)",
    "--input":                  "oklch(0.13 0 0 / 10%)",
    "--ring":                   "..."
  },
  "dark": {
    "--background":             "...",
    "--background-2":           "...",
    "--background-3":           "...",
    "--foreground":             "oklch(0.95 0 0)",
    "--card":                   "...",
    "--card-foreground":        "oklch(0.95 0 0)",
    "--popover":                "...",
    "--popover-foreground":     "oklch(0.95 0 0)",
    "--primary":                "...",
    "--primary-foreground":     "oklch(0.13 0 0)",
    "--secondary":              "...",
    "--secondary-foreground":   "oklch(0.95 0 0 / 80%)",
    "--muted":                  "...",
    "--muted-foreground":       "oklch(0.95 0 0 / 60%)",
    "--accent":                 "...",
    "--accent-foreground":      "oklch(0.95 0 0)",
    "--destructive":            "oklch(0.55 0.22 25)",
    "--destructive-foreground": "oklch(0.95 0 0)",
    "--border":                 "oklch(0.95 0 0 / 10%)",
    "--input":                  "oklch(0.95 0 0 / 10%)",
    "--ring":                   "..."
  }
}
```

---

## Notes

- `--background-2` = bg2, `--background-3` = bg3 — passed through unchanged in both modes
- `--ring` = same as `--primary` in both modes
- `--accent` = bg3 in both modes
- Always round oklch values to 4 decimal places
- If the user's primary is light (lightness > 0.70), use `oklch(0.13 0 0)` for `--primary-foreground` in dark mode and `oklch(0.95 0 0)` in light mode
- If the user's primary is dark (lightness < 0.40), flip those foreground values
