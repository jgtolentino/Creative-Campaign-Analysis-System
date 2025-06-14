# Visual Baselines for Dashboard QA

This directory contains baseline screenshots used for visual regression testing of dashboards.

## Baselines

- `retail_dashboard.png` - Baseline for the retail dashboard

## Testing Process

Visual regression testing compares newly generated dashboards against these baseline images to ensure visual consistency. The testing process is as follows:

1. A new dashboard is generated by VisualSynth
2. The dashboard is rendered in a headless browser at standard breakpoints (desktop, tablet, mobile)
3. Screenshots are taken at each breakpoint
4. The screenshots are compared against the baseline images
5. Differences above a certain threshold trigger a QA failure

## Updating Baselines

To update a baseline, use:

```bash
visualsynth.sh update-baseline --dashboard retail_dashboard --viewport desktop
```

This will take a screenshot of the current dashboard and save it as the new baseline.

## Baseline Details

Each baseline has associated metadata in `baseline_metadata.json` that includes:

- Date created
- Viewport size
- Browser information
- WCAG compliance status