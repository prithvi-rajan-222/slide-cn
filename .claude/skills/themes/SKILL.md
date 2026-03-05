---
name: slide-cn-themes
description: >
  Use this skill when the user asks to "change a theme", "add a theme", "review themes",
  "add a color scheme", "use a colour scheme", or describes a visual mood for their slides.
version: 0.2.0
---

# Slide-CN Theme Skill

You are an expert designer. Create color schemes for Slide-CN by directly overriding
Shadcn's CSS variables. Use `oklch` format throughout.

---

## The Variables to Define

Standard Shadcn variables plus 3 extra background gradient colors:

```css
:root {
  --background:             /* main slide canvas */
  --background-2:           /* gradient color 1 — complements background */
  --background-3:           /* gradient color 2 — complements background */
  --background-4:           /* gradient color 3 — complements background */
  --foreground:             /* primary text */

  --card:
  --card-foreground:

  --popover:
  --popover-foreground:

  --primary:
  --primary-foreground:

  --secondary:
  --secondary-foreground:

  --muted:
  --muted-foreground:

  --accent:
  --accent-foreground:

  --border:
  --input:
  --ring:

  --destructive:
  --destructive-foreground:
}
```

---

## Rules

- Always use `oklch`
- `--background-2/3/4` must complement `--background` — similar lightness, harmonious hues
- Surfaces (`--card`, `--popover`, `--muted`) should be `--background` slightly lighter
- Text should be white-based with opacity for secondary/muted — never introduce a new hue
- `--destructive` is always red ~`oklch(0.55 0.22 25)`
- Output only the CSS block, ready to paste into `globals.css`
