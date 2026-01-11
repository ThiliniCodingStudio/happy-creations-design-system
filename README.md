# Happy Creations Design System (HCDS) 🎨

A strictly typed, accessible **Atomic Design System** developed for *Happy Creations* to standardize UI patterns across web and VR dashboards.

## 📐 Design Philosophy
Built upon the foundational principles of **Google Material Design 3**, this system extends standard tokens to support the specific needs of medical simulation interfaces.
* **Foundation:** Material Design 3 (Figma Community Kit).
* **Architecture:** Atomic Design (Atoms $\rightarrow$ Molecules $\rightarrow$ Organisms).
* **Tech Stack:** React, TypeScript, Tailwind CSS.

## 🚀 Workflow (Design-to-Code)
1.  **Token Definition:** Visual properties (Color, Typography, Elevation) defined in Figma.
2.  **Component Logic:** React components utilizing **Discriminated Unions** to enforce strict variant control (e.g., `primary` vs. `outlined`).
3.  **Accessibility:** Built-in WCAG 2.1 compliance for contrast and focus states.
